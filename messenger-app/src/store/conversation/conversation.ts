import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserConversation, UserMessage } from '../../types'
import { ConversationState } from './types'

export const initialState: ConversationState = {
    conversations: null,
    messages: null,
}

const ConversationSlice = createSlice({
    name: 'conversation',
    initialState: initialState,
    reducers: {
        clear: () => {
            return initialState
        },
        setConversations: (state, action: PayloadAction<UserConversation[]>) => {
            state.conversations = action.payload
        },
        setMessages: (state, action: PayloadAction<UserMessage[]>) => {
            state.messages = action.payload
        }
    },
})

// actions
export const {
    setConversations,
    setMessages,
    clear,
} = ConversationSlice.actions

export default ConversationSlice
