import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserConversation } from '../../types'
import { UserState } from './types'

export const initialState: UserState = {
    user: null,
    idToken: '',
}

const UserSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        clear: () => {
            return initialState
        },
        setUser: (state, action: PayloadAction<UserConversation>) => {
            state.user = action.payload
        },
        setIdToken: (state, action: PayloadAction<string>) => {
            state.idToken = action.payload
        }
    },
})

// actions
export const {
    setUser,
    setIdToken,
    clear,
} = UserSlice.actions

export default UserSlice
