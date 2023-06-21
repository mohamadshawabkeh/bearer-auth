const request = require('supertest');
const app = require('../src/server');
const usersModel = require('../src/models/users.model');
const Users = require('../src/models/users.model');

let server;

beforeAll((done) => {
  server = app.listen(done); 
});

describe('Routes', () => {
  it('should return "Hello Home" on GET "/"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello Home');
    expect(response.status).toBe(200);
  });

  it('should return 201 status on POST "/signup"', async () => {
    const mockedCreate = jest.fn(() => Promise.resolve({ username: 'testUser' }));
    usersModel.create = mockedCreate;

    const response = await request(app).post('/signup').send({
      username: 'testUser',
      password: 'testPassword',
    });

    expect(response.status).toBe(201);
  });
  it('should return 200 status on GET "/secretstuff"', async () => {
    const authBearerSpy = jest.spyOn(usersModel, 'authBearer').mockResolvedValue({ username: 'testUser' });

    const response = await request(app).get('/secretstuff').set('Authorization', 'Bearer YOUR_TOKEN_HERE');

    expect(response.status).toBe(200);

    authBearerSpy.mockRestore();
  });
});

afterAll((done) => {
    server.close(done); 
  });