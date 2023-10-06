import { expect } from 'chai'
import request from 'supertest'

describe('Authentication', () => {
  describe('Authentication with valid credentials', () => {
    it('Validate status code', async () => {
      let res
      res = await request('https://clientbase-server.herokuapp.com/v5')
        .post('/user/login')
        .send({ email: 'business@owner.com', password: '123123' })

      expect(res.statusCode).to.eq(200)
    })
    it('Validate response message', async () => {
      let res
      res = await request('https://clientbase-server.herokuapp.com/v5')
        .post('/user/login')
        .send({ email: 'business@owner.com', password: '123123' })

      expect(res.body.message).to.eq('Auth success')
    })
    it('Check the property token exist', async () => {
      let res
      res = await request('https://clientbase-server.herokuapp.com/v5')
        .post('/user/login')
        .send({ email: 'business@owner.com', password: '123123' })

      expect(res.body.payload).to.haveOwnProperty('token')
    })
    it('Check the token is string', async () => {
      let res
      res = await request('https://clientbase-server.herokuapp.com/v5')
        .post('/user/login')
        .send({ email: 'business@owner.com', password: '123123' })

      expect(res.body.payload.token).to.be.a('string')
    })
  })
})
