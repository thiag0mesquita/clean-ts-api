import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient, // TS funcione junto com o objeto do JS e não ter conflito

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL, {
      // @ts-ignore
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  }
}
