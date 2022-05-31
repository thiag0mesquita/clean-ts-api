import { SurveyModel } from '@/domain/models/surveys'

export interface LoadSurveys {
  load (): Promise<SurveyModel[]>
}
