import { SurveyModel } from '@/domain/models/surveys'

export interface LoadSurveyById {
  loadById (id: string): Promise<SurveyModel>
}
