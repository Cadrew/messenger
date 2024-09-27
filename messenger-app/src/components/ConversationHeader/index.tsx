import React, { FC } from 'react'

import style from './style.module.scss'
import Avatar from '../Avatar'
import { AVATAR_DEFAULT } from '../../types'

interface ConversationHeaderProps {
    name: string
    isOnline?: boolean
    avatarSrc?: string
}

const ConversationHeader: FC<ConversationHeaderProps> = ({
    name,
    isOnline = false,
    avatarSrc = AVATAR_DEFAULT,
}) => {
    return (
        <div className={style.conversationHeader}>
            <Avatar
                name={name}
                src={avatarSrc}
                size={'xlarge'}
            />
            <div className={style.infoArea}>
                <label className={style.infoName}>{name}</label>
                <label className={style.infoStatus}>{isOnline ? 'Online' : 'Offline'}</label>
            </div>
        </div>
    )
}

export default ConversationHeader