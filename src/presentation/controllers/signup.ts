// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helper/http-helper'
import { Controller } from '../protocols/controller'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation'] // Paramentros de testes recebidos de SingUp.spec
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field)) // Retornando um BadRequest (Error 400) pq está faltando um parametro
      }
    }
  }
}
