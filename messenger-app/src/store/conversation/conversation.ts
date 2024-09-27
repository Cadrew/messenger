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
        setConversations: (state, action: PayloadAction<UserConversation[] | null>) => {
            state.conversations = action.payload
        },
        setMessages: (state, action: PayloadAction<UserMessage[] | null>) => {
            state.messages = action.payload
        },
        addMessage: (state, action: PayloadAction<UserMessage>) => {
            if (action.payload) state.messages.push(action.payload)
        }, 
    },
})

// actions
export const {
    setConversations,
    setMessages,
    clear,
    addMessage,
} = ConversationSlice.actions

export default ConversationSlice
