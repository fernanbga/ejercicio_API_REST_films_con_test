const request = require('supertest');
const app = require('../app');


describe('Films API routes', () => {
  it('should fetch a movie by title', async () => {
    const title = 'Inception';
    const response = await request(app).get(`/api/film/${title}`);
    expect(response.statusCode).toBe(200, `Expected status code 200 when fetching movie '${title}', but got ${response.statusCode}.`);
    expect(response.body.Title).toBe(title, `Expected movie title to be '${title}', but got '${response.body.Title}'.`);
  });

  it('should return 404 for a non-existent movie', async () => {
    const title = 'NonExistentMovie12345';
    const response = await request(app).get(`/api/film/${title}`);
    expect(response.statusCode).toBe(404, `Expected status code 404 for a non-existent movie '${title}', but got ${response.statusCode}.`);
    expect(response.body.message).toBe('Film not found', `Expected error message 'Film not found', but got '${response.body.message}'.`);
  });

  it('should add a new movie', async () => {
    const movie = {
      Title: 'Test Movie',
      Author: 'Test Author',
      Description: 'Test Description',
      Src: 'test.png'
    };
    const response = await request(app).post('/api/film/').send(movie);
    expect(response.statusCode).toBe(200, `Expected status code 200 when adding a new movie, but got ${response.statusCode}.`);
    expect(response.body.message).toBe(`Se ha guardado ${movie.Title}`, `Expected confirmation message for adding movie '${movie.Title}', but got a different message.`);
  });

  it('should update an existing movie', async () => {
    const updatedMovie = {
      id: 123,
      Title: 'Updated Test Movie',
      Author: 'Updated Test Author',
      Description: 'Updated Test Description',
      Src: 'updated_test.png'
    };
    const response = await request(app).put('/api/film/').send(updatedMovie);
    expect(response.statusCode).toBe(200, `Expected status code 200 when updating a movie, but got ${response.statusCode}.`);
    expect(response.body.message).toBe(`Se ha actualizado ${updatedMovie.Title}`, `Expected confirmation message for updating movie '${updatedMovie.Title}', but got a different message.`);
  });

  it('should delete an existing movie', async () => {
    const movie = {
      id: 123
    };
    const response = await request(app).delete('/api/film/').send(movie);
    expect(response.statusCode).toBe(200, `Expected status code 200 when deleting a movie, but got ${response.statusCode}.`);
    expect(response.body.message).toBe(`Se ha borrado la película con ID: ${movie.id}`, `Expected confirmation message for deleting movie with ID '${movie.id}', but got a different message.`);
  });
});
