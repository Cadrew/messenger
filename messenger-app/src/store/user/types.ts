import { UserConversation } from '../../types'

export interface UserState {
    user: UserConversation | null
    idToken: string
}
