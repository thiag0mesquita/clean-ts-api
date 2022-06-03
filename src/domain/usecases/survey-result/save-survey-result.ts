import { SurveyResultModel } from '@/domain/models/surveys-result'

export type SaveSurveyResultParams = {
  surveyId: string
  accountId: string
  answer: string
  date: Date
}

export interface SaveSurveyResult {
  save (data: SaveSurveyResultParams): Promise<SurveyResultModel>
}
