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
        <div>
            {!conversations ? 
                <h4>No conversations found</h4> :            
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
                    }
                />
            }
        </div>
    )
}

export default ConversationList