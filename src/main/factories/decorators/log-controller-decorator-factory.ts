import { LogControllerDecorator } from '@/main/decorators/log-controller-decorator'
import { LogMongoReposity } from '@/infra/db/mongodb/log/log-mongo-repository'
import { Controller } from '@/presentation/protocols'

export const makeLogControllerDecorator = (controller: Controller): Controller => {
  const logMongoReposity = new LogMongoReposity()
  return new LogControllerDecorator(controller, logMongoReposity)
}
