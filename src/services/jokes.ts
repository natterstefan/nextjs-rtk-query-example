// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query/react'

type RandomJokeResponse =
  | {
      type: 'twopart'
      setup: string
      delivery: string
    }
  | {
      type: 'single'
      joke: string
    }

// Define a service using a base URL and expected endpoints
export const jokeApi = createApi({
  reducerPath: 'jokeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://v2.jokeapi.dev/' }),
  endpoints: builder => ({
    getRandomJoke: builder.query<RandomJokeResponse, undefined>({
      query: () => `joke/Any`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRandomJokeQuery } = jokeApi
