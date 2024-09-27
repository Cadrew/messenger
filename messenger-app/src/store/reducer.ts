import conversationSlice from './conversation/conversation'
import userSlice from './user/user'
import { combineReducers } from '@reduxjs/toolkit'
const rootReducer = combineReducers({
    user: userSlice.reducer,
    conversation: conversationSlice.reducer,
})

export default rootReducer
