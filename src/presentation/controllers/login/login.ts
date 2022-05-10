import { Authentication } from '../../../domain/usecases/authentication'
import { InvalidParamError, MissingParamError } from '../../errors'
import { badRequest, serverError } from '../../helper/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { EmailValidator } from '../signup/signup-protocols'

export class LoginController implements Controller {
    private readonly emailValidator: EmailValidator
    private readonly authentication: Authentication

    constructor (emailValidator: EmailValidator, authentication: Authentication) {
      this.emailValidator = emailValidator
      this.authentication = authentication
    }

    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
      try {
        const requiredFields = ['email', 'password'] // Paramentros de testes recebidos de login.spec
        for (const field of requiredFields) {
          if (!httpRequest.body[field]) {
            return badRequest(new MissingParamError(field)) // Retorna um BadRequest (Error 400) se estiver faltando parametro
          }
        }
        const { email, password } = httpRequest.body
        const isValid = this.emailValidator.isValid(email)
        if (!isValid) {
          return badRequest(new InvalidParamError('email'))
        }
        await this.authentication.auth(email, password)
      } catch (error) {
        return serverError(error)
      }
    }
}
