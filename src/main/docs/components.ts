import { badRequest, serverError, unauthorized, notFound, forbidden } from './components/'
import { apiKeyAuthSchema } from './schemas/api-key-auth-schema'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest,
  serverError,
  unauthorized,
  notFound,
  forbidden

}
