import React, { FC, useCallback } from 'react'

import style from './style.module.scss'
import ConversationHeader from '../ConversationHeader'
import { User, UserMessage } from '../../types'
import MessageInput from '../MessageInput'
import Message from '../Message'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { addMessage } from '../../store/conversation/conversation'

interface ChatContainerProps {
    messages: UserMessage[]
    user: User
}

const ChatContainer: FC<ChatContainerProps> = ({
    messages,
    user
}) => {
    const dispatch = useAppDispatch()
    const currentUser = useAppSelector((state) => state.user.user)

    const handleMessageSent = useCallback((message: string) => {
        dispatch(addMessage({
            id: messages[messages.length - 1].id + 1,
            direction: 'right',
            message: message,
            sender: currentUser ? currentUser.name : '',
            to: user.name,
            sentTime: new Date().getTime().toString()
        }))
    }, [messages, currentUser, user.name, dispatch])

    const shouldDisplay = useCallback((message: UserMessage): boolean => {
        if (message.sender !== user.name && message.sender !== currentUser.name)
            return false
        if (message.sender === currentUser.name && message.to !== user.name)
            return false
        return true
    }, [currentUser.name, user.name])

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
                {!messages || !user || !currentUser ?
                    <h4>Send your first message!</h4> :
                    <div>
                        {messages.map((message) => {
                            return shouldDisplay(message) ? (
                                <Message
                                    key={message.id}
                                    message={message}
                                />
                            ) : null
                        })}
                    </div>
                }
            </div>
            <div className={style.messageInput}>
                <MessageInput autofocus={true} onMessageSent={handleMessageSent} />
            </div>
        </div>
    )
}

export default ChatContainer