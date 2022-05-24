import { Router } from 'express'
import { adaptRoute } from '../adapter/express/express-route-adapter'
import { makeAddSurveyController } from '../factories/controllers/add-survey/add-survey-controller-factory'

export default (router: Router): void => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.post('/surveys', adaptRoute(makeAddSurveyController()))
}
