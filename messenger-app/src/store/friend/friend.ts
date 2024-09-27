import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../types'
import { FriendState } from './types'

export const initialState: FriendState = {
    friends: null,
}

const FriendSlice = createSlice({
    name: 'conversation',
    initialState: initialState,
    reducers: {
        clear: () => {
            return initialState
        },
        setFriends: (state, action: PayloadAction<User[] | null>) => {
            state.friends = action.payload
        }
    },
})

// actions
export const {
    setFriends,
    clear,
} = FriendSlice.actions

export default FriendSlice
