import React, { FC } from 'react'

import style from './style.module.scss'
import { UserMessage } from '../../types'
import { MessageBox } from 'react-chat-elements'

export interface MessageProps {
    message: UserMessage
}

const Message: FC<MessageProps> = ({
    message,
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
            />
        </div>
        
    )
}

export default Message