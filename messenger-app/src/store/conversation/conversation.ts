import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserConversation, UserMessage } from '../../types'
import { ConversationState } from './types'

export const initialState: ConversationState = {
    conversations: null,
    messages: null,
    active: 1
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
        setActiveConversation: (state, action: PayloadAction<number>) => {
            const index = state.conversations.findIndex(conversation => conversation.id === action.payload)
            console.log(state.conversations[index].unread)
            state.conversations[index].unread = 0
            state.active = action.payload
        },
    },
})

// actions
export const {
    clear,
    setConversations,
    setMessages,
    addMessage,
    setActiveConversation,
} = ConversationSlice.actions

export default ConversationSlice
