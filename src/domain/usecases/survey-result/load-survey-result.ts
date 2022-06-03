import { SurveyResultModel } from '@/domain/models/surveys-result'

export interface LoadSurveyResult {
  load (surveyId: string): Promise<SurveyResultModel>
}
