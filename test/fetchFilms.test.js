const fetchFilm = require('../utils/fetchFilms');

describe('fetchFilm utility', () => {
  it('should return movie details for a known movie', async () => {
    const data = await fetchFilm('Inception');
    expect(data).toBeDefined();
    if (!data) {
      console.error("Expected movie details for 'Inception', but got nothing.");
    }
    expect(data.Title).toBe('Inception');
    if (data.Title !== 'Inception') {
      console.error("Expected movie title to be 'Inception', but got a different title.");
    }
  });
  
  it('should return null for a non-existent movie', async () => {
    const data = await fetchFilm('NonExistentMovie12345');
    expect(data).toBeNull();
    if (data) {
      console.error("Expected no movie details for 'NonExistentMovie12345', but got some data.");
    }
  });
});
