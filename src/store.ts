import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@rtk-incubator/rtk-query'

import { jokeApi } from './services/jokes'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [jokeApi.reducerPath]: jokeApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(jokeApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
