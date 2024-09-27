import React, { FC } from 'react'

import style from './style.module.scss'
import { Avatar as ChatAvatar } from "react-chat-elements";
import { AVATAR_DEFAULT } from '../../types'

interface AvatarProps {
    name: string
    src?: string
    size?: 'default' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
}

const Avatar: FC<AvatarProps> = ({
    name,
    src = AVATAR_DEFAULT,
    size = 'default'
}) => {
    return (
        <ChatAvatar 
            className={style.chatAvatar}
            src={src}
            alt={name}
            size={size}
            type='rounded'
        />
    )
}

export default Avatar