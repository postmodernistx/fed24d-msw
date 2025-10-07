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
  const newUserData = {
    username: 'kalleanka',
    password: 'mimmi'
  };

  const response = await fetch('http://localhost:5173/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUserData),
  });

  await expect(response.json()).resolves.toEqual({
      username: newUserData.username,
      status: 200,
  })
})
