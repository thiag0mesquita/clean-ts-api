import { makeSaveSurveyResultController } from '@/main/factories/controllers/survey-result/save-survey-result/save-survey-controller-factory'
import { adaptRoute } from '@/main/adapter/express-route-adapter'
import { auth } from '@/main/middlewares/auth'
import { Router } from 'express'

export default (router: Router): void => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.put('/surveys/:surveyId/results', auth, adaptRoute(makeSaveSurveyResultController()))
}
