import conversationSlice from './conversation/conversation'
import userSlice from './user/user'
import friendSlice from './friend/friend'
import { combineReducers } from '@reduxjs/toolkit'
const rootReducer = combineReducers({
    user: userSlice.reducer,
    conversation: conversationSlice.reducer,
    friend: friendSlice.reducer
})

export default rootReducer
