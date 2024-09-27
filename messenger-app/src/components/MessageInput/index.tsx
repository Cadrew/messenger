import React, { FC, useCallback, useRef, useState } from 'react'

import style from './style.module.scss'
import { Input, Button } from 'react-chat-elements'

interface MessageInputProps {
    autofocus?: boolean
    multiline?: boolean
    placeholder?: string
}

const MessageInput: FC<MessageInputProps> = ({
    autofocus = false,
    multiline = false,
    placeholder = "Type message here..."
}) => {
    const [messageValue, setMessageValue] = useState<string>('')

    const handleSubmit = useCallback(() => {
        if (messageValue !== '') {
            console.log(messageValue)
            setMessageValue('')
        }
    }, [messageValue])

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