import { UserConversation, UserMessage } from '../../types'

export interface ConversationState {
    conversations: UserConversation[] | null
    messages: UserMessage[] | null
}
