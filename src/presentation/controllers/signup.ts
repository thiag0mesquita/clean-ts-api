// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helper/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name')) // Retornando um BadRequest (Error 400) pq está faltando um parametro (name)
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email')) // Retornando um BadRequest (Error 400) pq está faltando um parametro (email)
    }
  }
}
