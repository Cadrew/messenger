import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../types'
import { FriendState } from './types'

export const initialState: FriendState = {
    friends: null,
    active: '1',
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
        },
        setActiveFriend: (state, action: PayloadAction<string>) => {
            state.active = action.payload
        },
    },
})

// actions
export const {
    clear,
    setFriends,
    setActiveFriend,
} = FriendSlice.actions

export default FriendSlice
