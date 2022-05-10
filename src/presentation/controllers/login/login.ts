import { InvalidParamError, MissingParamError } from '../../errors'
import { badRequest, serverError, unauthorized } from '../../helper/http-helper'
import { Controller, HttpRequest, HttpResponse, EmailValidator, Authentication } from './login-protocols'

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
        const accessToken = await this.authentication.auth(email, password)
        if (!accessToken) {
          return unauthorized()
        }
      } catch (error) {
        return serverError(error)
      }
    }
}
