import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('http://localhost:5173/user', () => {
    return HttpResponse.json({
      id: 'abc-123',
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
  http.post('http://localhost:5173/create', () => {

    return HttpResponse.json({
        status: 200,
    });
  }),
]