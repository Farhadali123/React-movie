# Movie App

This is a movie app I made with React. It lets people search for movies, see popular movies, and check which movies are being searched the most.

## What the app does

- Shows a list of popular movies when the app opens
- Lets users search for movies
- Waits briefly after typing before searching, so it does not send too many requests
- Shows movie posters, ratings, release dates, and languages
- Opens a movie's details page on TMDB when its card is selected
- Saves search counts with Appwrite
- Displays the top trending searches
- Shows loading and error messages when needed
- Works on different screen sizes

## Built with

- React
- Vite
- Tailwind CSS
- Appwrite
- The Movie Database API
- JavaScript

## Run the project

You need Node.js and npm installed on your computer.

1. Install the project packages:

   ```bash
   npm install
   ```

2. Create a file named `.env.local` in the main project folder.

3. Add these variables to `.env.local`:

   ```env
   TMDB_API_KEY=your_tmdb_api_key
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local address shown in the terminal.

## Appwrite setup

The app uses Appwrite to count movie searches and create the trending list.

The Appwrite collection needs these attributes:

- `searchTerm` for the searched movie name
- `count` for the number of searches
- `movie_id` for the movie ID
- `poster_url` for the movie poster address

The project ID, database ID, and collection ID must match the values in `.env.local`. In Vercel, add the same variables in the project environment settings. Keep `TMDB_API_KEY` without the `VITE_` prefix so it stays on the server and is not included in the browser bundle.

## Available commands

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Project folders

- `src/App.jsx` contains the main movie app
- `src/appwrite.js` contains the Appwrite database functions
- `src/components` contains the search box, movie cards, and loading spinner
- `src/App.css` and `src/index.css` contain the styles
- `public` contains the local files used by the app

## Note

The environment file is kept local and should not be uploaded. Use `.env.example` as a guide, and never put real API keys or private credentials in a committed file.