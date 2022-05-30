import { SurveyModel } from '@/domain/models/surveys'

export interface LoadSurveys {
  loadById (id: string): Promise<SurveyModel>
}
