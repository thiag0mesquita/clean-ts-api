import { SaveSurveyResultRepository } from '@/data/usecases/save-survey-result/db-save-survey-result-protocols'
import { MongoHelper } from '../helpers/mongo-helper'
import { SurveyResultModel } from '@/domain/models/surveys-result'
import { SaveSurveyResultModel } from '@/domain/usecases/save-survey-result'

export class SurveyResultMongoRepository implements SaveSurveyResultRepository {
  async save (data: SaveSurveyResultModel): Promise<SurveyResultModel> {
    const surveyResultCollection = await MongoHelper.getCollection('surveyResults')
    const res = await surveyResultCollection.findOneAndUpdate({
      surveyId: data.surveyId,
      accountId: data.accountId
    }, {
      $set: {
        answer: data.answer,
        date: data.date
      }
    }, {
      upsert: true, // Caso não encontre um registro com essas as informações, é para criar um SurveyResult com todas as informações
      returnOriginal: false // returnar o valor modificado, e não o original "encontrado"
    })
    return res.value && MongoHelper.map(res.value)
  }
}
