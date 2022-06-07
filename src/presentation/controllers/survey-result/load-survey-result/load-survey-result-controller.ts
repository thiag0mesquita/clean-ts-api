import { InvalidParamError } from '@/presentation/errors'
import { forbidden } from '@/presentation/helper/http/http-helper'
import { Controller, HttpRequest, HttpResponse, LoadSurveyById } from './load-survey-result-controller-protocols'

export class LoadSurveyResultController implements Controller {
  constructor (private readonly loadSurveyById: LoadSurveyById) {}
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const survey = await this.loadSurveyById.loadById(httpRequest.params.surveyid)
    if (!survey) {
      return forbidden(new InvalidParamError('surveyId'))
    }
    return Promise.resolve(null)
  }
}
