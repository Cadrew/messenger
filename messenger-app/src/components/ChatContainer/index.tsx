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
            sentTime: new Date().getTime().toString()
        }))
    }, [messages, currentUser, dispatch])

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
                    <div className={style.messageList}>
                        {messages.map((message) => {
                            return message.sender === user.name || message.sender === currentUser.name ? (
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