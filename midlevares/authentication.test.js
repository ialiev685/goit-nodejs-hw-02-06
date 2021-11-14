const { authentication } = require('./authentication')
const { controllerWrappers } = require('./controllerWrappers')
const jwt = require('jsonwebtoken')
const { Unauthorized } = require('http-errors')
require('dotenv').config()
// jest.mock('./authentication.js')

describe('test authentication', () => {
  const mockRes = jest.fn()
  const mockNext = jest.fn()

  const mockFn = jest.fn((req, mockRes, mockNext) => {
    try {
      const [bearer, token] = req.headers.authorization.split(' ')

      if (bearer !== 'Bearer') {
        throw new Unauthorized('Not authorized')
      }

      const mockUserRegistred = jest.fn()
      mockUserRegistred.mockReturnValue({ token: 'eyJhbGciOiJIUzI1NiJ9.MQ.WJ253fD15-XY7QfZcYD2Fbgp1n7bATn1T4JA_nLjAbM' })

      const result = mockUserRegistred()

      if (result.token !== token) {
        mockNext(new Unauthorized('Not authorized'))
      }
      req.user = result
      mockNext()
    } catch (error) {
      mockNext(error)
    }
  })

  test('user did not give token', () => {
    const req = {
      headers: { }
    }

    mockFn(req, mockRes, mockNext)

    expect(mockNext).toHaveBeenCalledTimes(1)
  })

  test('user gave invalid token', async () => {
    const userAlien = {
      id: 2
    }

    const { SECRET_KEY } = process.env
    const tokenAlien = jwt.sign(userAlien.id, SECRET_KEY)

    console.log(tokenAlien)

    const req = {
      headers: {
        authorization: `Bearer ${tokenAlien}`
      }
    }
    mockFn(req, mockRes, mockNext)
    // expect(() => mockFn(req, mockRes, mockNext)).toThrow('Not authorized')
    expect(mockNext).toHaveBeenCalledTimes(2)
  })

  test('user gave valid token', async () => {
    const userRegisterd = {
      id: 1
    }

    const { SECRET_KEY } = process.env
    const tokenAlien = jwt.sign(userRegisterd.id, SECRET_KEY)

    const req = {
      headers: {
        authorization: `Bearer ${tokenAlien}`
      }
    }
    mockFn(req, mockRes, mockNext)
    // expect(() => mockFn(req, mockRes, mockNext)).toThrow('Not authorized')
    expect(mockNext).toHaveBeenCalledTimes(1)
  })
})
