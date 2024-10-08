import React, { FC } from 'react'

import style from './style.module.scss'
import { UserConversation } from '../../types'
import { ChatItem } from 'react-chat-elements'
import { useAppDispatch } from '../../store/hooks'
import { setActiveConversation } from '../../store/conversation/conversation'

interface ConversationListProps {
    conversations: UserConversation[]
}

const ConversationList: FC<ConversationListProps> = ({
    conversations,
}) => {
    const dispatch = useAppDispatch()

    return (
        <div className={style.chatList}>
            {!conversations ? 
                <h4>No conversations found</h4> :
                <div>
                    {conversations.map((conversation) => {
                        return (
                            <ChatItem
                                className={style.chatItem}
                                key={conversation.id}
                                id={conversation.id}
                                avatar={conversation.avatar}
                                alt={conversation.alt}
                                title={conversation.title}
                                subtitle={conversation.subtitle}
                                date={conversation.date}
                                unread={conversation.unread}
                                onClick={() => dispatch(setActiveConversation(conversation.id))}
                            />
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default ConversationList