import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import rootReducer from './reducer'

export function createStore(preloadedState = {}) {
    return configureStore({
        reducer: rootReducer,        
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
                immutableCheck: false,
            }),
        preloadedState,
    })
}

const store = createStore()
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = ReturnType<typeof createStore>

export default store
