import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient, // TS funcione junto com o objeto do JS e não ter conflito

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map: (collection: any): any => {
    const { _id, ...collectionWhithoutId } = collection
    return Object.assign({}, collectionWhithoutId, { id: _id })
  }
}
