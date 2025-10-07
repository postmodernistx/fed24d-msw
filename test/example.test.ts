// @vitest-environment node
import { test, expect } from 'vitest'
 
test('responds with the user', async () => {
  const response = await fetch('http://localhost:5173/user')
 
  await expect(response.json()).resolves.toEqual({
    id: 'abc-123',
    firstName: 'John',
    lastName: 'Maverick',
  })
})

test('create new user', async () => {
    const response = await fetch('http://localhost:5173/create', {
        method: 'POST',
        body: JSON.stringify("{ username: 'kalleanka' }")
    })

    await expect(response.json()).resolves.toEqual({
        test: 'hej',
        username: 'abc',
        status: 200,
    })
})