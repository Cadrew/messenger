import React, { FC, useCallback, useEffect, useState } from 'react'

import style from './style.module.scss'
import { Input, Button } from 'react-chat-elements'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { User } from '../../types'
import { setDraftMessage } from '../../store/conversation/conversation'

interface MessageInputProps {
    friend: User
    autofocus?: boolean
    multiline?: boolean
    placeholder?: string
    onMessageSent?: (message: string) => void
}

const MessageInput: FC<MessageInputProps> = ({
    friend,
    autofocus = false,
    multiline = false,
    placeholder = "Type message here...",
    onMessageSent
}) => {    
    const dispatch = useAppDispatch()
    const [messageValue, setMessageValue] = useState<string>('')
    const conversations = useAppSelector((state) => state.conversation.conversations)

    useEffect(() => {
        const draft = conversations.find((conversation) => conversation.title === friend.name).draft
        setMessageValue(draft)
    }, [conversations, friend.name])

    const handleSubmit = useCallback(() => {
        if (messageValue !== '') {
            const conversationId = conversations.find((conversation) => conversation.title === friend.name).id
            onMessageSent(messageValue)
            setMessageValue('')
            dispatch(setDraftMessage({id: conversationId, draft: ''}))
        }
    }, [messageValue, conversations, friend.name, dispatch, onMessageSent])

    const handleChange = useCallback((evt) => {
        const conversationId = conversations.find((conversation) => conversation.title === friend.name).id
        dispatch(setDraftMessage({id: conversationId, draft: evt.target.value}))
        setMessageValue(evt.target.value)
    }, [conversations, friend.name, dispatch])

    const handleKeyPress = (event) => {
        // look for the `Enter` keyCode
        if (event.keyCode === 13 || event.which === 13) {
          handleSubmit()
        }
    }

    return (
        <div className={style.messageInputContainer}>
            <Input
                autofocus={autofocus}
                placeholder={placeholder}
                multiline={multiline}
                maxHeight={200}
                autoHeight={true}
                value={messageValue}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
            <Button
                className={style.sendBtn}
                text={"Send"}
                onClick={handleSubmit}
                title="Send"
            />        
        </div>
    )
}

export default MessageInput