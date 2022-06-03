import { SurveyResultModel } from '@/domain/models/surveys-result'

export interface LoadSurveyResultRepository {
  loadBySurveyId (surveyId: string): Promise<SurveyResultModel>
}
