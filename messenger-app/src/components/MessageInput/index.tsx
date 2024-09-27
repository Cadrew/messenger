import React, { FC, useCallback, useState } from 'react'

import style from './style.module.scss'
import { Input, Button } from 'react-chat-elements'

interface MessageInputProps {
    autofocus?: boolean
    multiline?: boolean
    placeholder?: string
    onMessageSent?: (message: string) => void
}

const MessageInput: FC<MessageInputProps> = ({
    autofocus = false,
    multiline = false,
    placeholder = "Type message here...",
    onMessageSent
}) => {
    const [messageValue, setMessageValue] = useState<string>('')

    const handleSubmit = useCallback(() => {
        if (messageValue !== '') {
            onMessageSent(messageValue)
            setMessageValue('')
        }
    }, [messageValue, onMessageSent])

    const handleChange = useCallback((evt) => {
        setMessageValue(evt.target.value)
    }, [])

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