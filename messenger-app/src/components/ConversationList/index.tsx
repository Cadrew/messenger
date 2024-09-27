import React, { FC } from 'react'

import style from './style.module.scss'
import { UserConversation } from '../../types'
import { ChatList } from 'react-chat-elements'

interface ConversationListProps {
    conversations: UserConversation[]
}

const ConversationList: FC<ConversationListProps> = ({
    conversations,
}) => {
    return (
        <ChatList 
            id={0}
            lazyLoadingImage={''}
            className={style.chatList}
            dataSource={
                conversations.map(conversation => {
                    return {
                        id: conversation.id,
                        avatar: conversation.avatar,
                        alt: conversation.alt,
                        title: conversation.title,
                        subtitle: conversation.subtitle,
                        date: conversation.date,
                        unread: conversation.unread,
                      }
                })
            } />
    )
}

export default ConversationList