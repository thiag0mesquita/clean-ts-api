import { AccessDeniedError } from '../errors'
import { forbidden } from '../helper/http/http-helper'
import { HttpRequest, HttpResponse, Middleware } from '../protocols'

export class AuthMiddleware implements Middleware {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = forbidden(new AccessDeniedError())
    return new Promise(resolve => resolve(error))
  }
}
