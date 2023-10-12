import { expect } from 'chai'
import request from 'supertest'
import 'dotenv/config'

describe('Authentication', () => {
  describe('Authentication with valid credentials', () => {
    it('Validate status code', async () => {
      let res
      res = await request(process.env.BASE_URL)
        .post('/user/login')
        .send({ email: process.env.EMAIL, password: process.env.PASSWORD })

      expect(res.statusCode).to.eq(200)
    })
    it('Validate response message', async () => {
      let res
      res = await request(process.env.BASE_URL)
        .post('/user/login')
        .send({ email: process.env.EMAIL, password: process.env.PASSWORD })

      expect(res.body.message).to.eq('Auth success')
    })
    it('Check the property token exist', async () => {
      let res
      res = await request(process.env.BASE_URL)
        .post('/user/login')
        .send({ email: process.env.EMAIL, password: process.env.PASSWORD })

      expect(res.body.payload).to.haveOwnProperty('token')
    })
    it('Check the token is string', async () => {
      let res
      res = await request(process.env.BASE_URL)
        .post('/user/login')
        .send({ email: process.env.EMAIL, password: process.env.PASSWORD })

      expect(res.body.payload.token).to.be.a('string')
    })
  })
})
