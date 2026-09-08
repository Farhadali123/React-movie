const TMDB_API_URL = 'https://api.themoviedb.org/3';

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = globalThis.process?.env?.TMDB_API_KEY;
  if (!apiKey) {
    return response.status(500).json({ error: 'TMDB API key is not configured' });
  }

  const query = typeof request.query.query === 'string'
    ? request.query.query.trim()
    : '';
  const path = query ? '/search/movie' : '/discover/movie';
  const params = new URLSearchParams({
    api_key: apiKey,
    ...(query ? { query } : { sort_by: 'popularity.desc' }),
  });

  try {
    const tmdbResponse = await fetch(`${TMDB_API_URL}${path}?${params}`);
    const data = await tmdbResponse.json();

    return response.status(tmdbResponse.status).json(data);
  } catch (error) {
    console.error('TMDB request failed:', error);
    return response.status(502).json({ error: 'Unable to fetch movies' });
  }
}
