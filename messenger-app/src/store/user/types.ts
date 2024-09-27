import { User } from '../../types'

export interface UserState {
    user: User | null
    idToken: string
}
