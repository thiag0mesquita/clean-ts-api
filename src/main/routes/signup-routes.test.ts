import request from 'supertest'
import app from '../config/app'

describe('Sign Up Routes', () => {
  test('Should return an account on sucess', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Thiago',
        email: 'thiago.mesquita@gmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
