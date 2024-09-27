import React, { FC, useCallback } from 'react'

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
    const handleMessageSent = useCallback((message: string) => {
        messages.push(
            {
                id: messages[messages.length - 1].id + 1,
                direction: 'right',
                message: message,
                sender: user.name,
                sentTime: new Date().toDateString()
            })
    }, [])

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
                <MessageInput autofocus={true} onMessageSent={handleMessageSent} />
            </div>
        </div>
    )
}

export default ChatContainer