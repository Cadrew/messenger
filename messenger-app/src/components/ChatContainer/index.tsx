import React, { FC } from 'react'

import style from './style.module.scss'
import ConversationHeader from '../ConversationHeader'
import { User, UserMessage } from '../../types'
import MessageInput from '../MessageInput'
import Message from '../Message'

interface ChatContainerProps {
    messages: UserMessage[]
    user: User
}

const ChatContainer: FC<ChatContainerProps> = ({
    messages,
    user
}) => {
    return (
        <div 
            className={style.chatContainer}
        >
            <ConversationHeader 
                name={user.name}
                avatarSrc={user.src}
                isOnline={user.isOnline}
            />
            <div className={style.messages}>
                <div className={style.messageList}>
                    {messages.map((message) => {
                        return (
                            <Message
                                message={message}
                            />
                        )
                    })}
                </div>
                
            </div>
            <div className={style.messageInput}>
                <MessageInput autofocus={true} />
            </div>
        </div>
    )
}

export default ChatContainer