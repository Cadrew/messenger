import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import rootReducer from './reducer'

export function createStore(preloadedState = {}) {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    })
}

const store = createStore()
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = ReturnType<typeof createStore>

export default store
