export interface UserMessage {    
    id: string
    message: string
    sentTime: string
    sender: string
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

export const AVATAR_DEFAULT = 'https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg' //TODO: change default avatar

export type AvatarSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'fluid' 