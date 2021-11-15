const request = require('supertest')
const app = require('../app')
const { authentication } = require('../midlevares/authentication')
const { User } = require('../model/schemas/users')

describe('POST /users', () => {
  test('user gave invalid token', async () => {
    const invalidToken = 'pyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGVlMTc0NDEyOGU2ZDcxNTBlZmM4YyIsImlhdCI6MTYzNjgzMzk4MX0.cCxXjkCxr98y60zN4EoI9u5jQg_zXzAl-3c8-qL3iuo'

    // await request(app).post('/users/logout').set('authorization', `Bearer ${validToken}`).expect(401)

    await request(app).get('/api/contacts').set('authorization', `Bearer ${invalidToken}`).expect(401)
  })

  test('user gave valid token', async () => {
    // const validToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGVlMTc0NDEyOGU2ZDcxNTBlZmM4YyIsImlhdCI6MTYzNjgzMzk4MX0.cCxXjkCxr98y60zN4EoI9u5jQg_zXzAl-3c8-qL3iuo'

    // const req = {
    //   headers: {
    //     authorization: `Bearer ${validToken}`
    //   }
    // }
    // const res = jest.fn()

    // const next = jest.fn()

    // const result = {
    //   token: validToken
    // }

    // jest.spyOn(User, 'findById').mockImplementationOnce(() => result)

    // await request(app).get('/api/contacts').expect(401)
  })
})
