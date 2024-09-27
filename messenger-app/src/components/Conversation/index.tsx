import React, { FC } from 'react'

import style from './style.module.scss'
import { AVATAR_DEFAULT, UserConversation } from '../../types'
import { ChatItem } from 'react-chat-elements'

export interface ConversationProps {
    conversation: UserConversation
    avatarSrc?: string
}

const Conversation: FC<ConversationProps> = ({
    conversation,
    avatarSrc = AVATAR_DEFAULT
}) => {
    return (
        <ChatItem
            id={conversation.id}
            avatar={avatarSrc}
            alt={conversation.alt}
            title={conversation.title}
            subtitle={conversation.subtitle}
            date={conversation.date}
            unread={conversation.unread}
        />
    )
}

export default Conversation