import React, { FC } from 'react'

import style from './style.module.scss'
import { UserMessage } from '../../types'
import { MessageBox } from 'react-chat-elements'

export interface MessageProps {
    message: UserMessage
    onClick?: () => void
}

const Message: FC<MessageProps> = ({
    message,
    onClick = () => {}
}) => {
    return (
        <div className={style.messageBox}>
            <MessageBox 
                type={'text'}
                id={message.id}
                title={message.sender}
                text={message.message}
                position={message.direction}
                date={parseInt(message.sentTime)}
                focus={true}
                forwarded={false}
                titleColor={''}
                replyButton={false}
                removeButton={false}
                status='sent'
                notch={true}
                retracted={false}                
                onClick={onClick}
            />
        </div>
        
    )
}

export default Message