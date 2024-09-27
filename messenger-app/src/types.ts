export interface UserMessage {    
    id: string
    message: string
    sentTime: string
    sender: string
    to: string
    direction?: 'left' | 'right'
}

export interface User {
    id: string
    name: string
    src?: string
    isOnline?: boolean    
}

export interface UserConversation {
    id: number
    subtitle: string
    date: Date
    title: string
    avatar?: string
    alt?: string
    unread: number
}

export const AVATAR_DEFAULT = 'https://i.pinimg.com/736x/36/95/37/369537d07faab72506f1325d42e650bc.jpg'

export type AvatarSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'fluid' 