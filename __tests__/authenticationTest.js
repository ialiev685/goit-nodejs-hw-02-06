const jwt = require('jsonwebtoken')
const { Unauthorized } = require('http-errors')
require('dotenv').config()

const mockFn = jest.fn((req, mockRes, mockNext) => {
  try {
    const [bearer, token] = req.headers.authorization.split(' ')

    if (bearer !== 'Bearer') {
      mockNext(new Unauthorized('Not authorized'))
      return
    }

    const mockUserRegistred = jest.fn()
    mockUserRegistred.mockReturnValue({ token: 'eyJhbGciOiJIUzI1NiJ9.MQ.WJ253fD15-XY7QfZcYD2Fbgp1n7bATn1T4JA_nLjAbM' })

    const result = mockUserRegistred()

    if (result.token !== token) {
      mockNext(new Unauthorized('Not authorized'))
      return
    }
    req.user = result
    mockNext()
  } catch (error) {
    mockNext(new Unauthorized('Not authorized'))
  }
})

describe('test authentication', () => {
  test('user did not give token', () => {
    const req = {
      headers: { }
    }

    const mockRes = jest.fn()
    const mockNext = jest.fn()

    mockFn(req, mockRes, mockNext)

    expect(mockNext).toHaveBeenCalledTimes(1)
    expect(mockNext).toHaveBeenLastCalledWith(new Unauthorized('Not authorized'))
  })

  test('user gave invalid token', async () => {
    const userAlien = {
      id: 2
    }

    const { SECRET_KEY } = process.env
    const tokenAlien = jwt.sign(userAlien.id, SECRET_KEY)

    const mockRes = jest.fn()
    const mockNext = jest.fn()

    const req = {
      headers: {
        authorization: `Bearer ${tokenAlien}`
      }
    }
    mockFn(req, mockRes, mockNext)

    expect(mockNext).toHaveBeenCalledTimes(1)
    expect(mockNext).toHaveBeenCalledWith(new Unauthorized('Not authorized'))
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

    const mockRes = jest.fn()
    const mockNext = jest.fn()

    mockFn(req, mockRes, mockNext)

    expect(mockNext).toHaveBeenCalledTimes(1)
    expect(mockNext).toHaveBeenCalledWith()
  })
})
