import { User, UserConversation, UserMessage } from "./types"

export let messages: UserMessage[] = [
    {
        id: '1',
        direction: 'left',
        message: 'Hello my friend',
        sender: 'Emily',
        sentTime: '15 mins ago'
    },
    {
        id: '2',
        direction: 'right',
        message: 'Hello my friend',
        sender: 'Eliot',
        sentTime: '15 mins ago'
    },
    {
        id: '3',
        direction: 'left',
        message: 'Hello my friend',
        sender: 'Emily',
        sentTime: '15 mins ago'
    },
    {
        id: '4',
        direction: 'right',
        message: 'Hello my friend',
        sender: 'Eliot',
        sentTime: '15 mins ago'
    },
    {
        id: '5',
        direction: 'left',
        message: 'Hello my friend',
        sender: 'Emily',
        sentTime: '15 mins ago'
    },
    {
        id: '6',
        direction: 'right',
        message: 'Hello my friend',
        sender: 'Eliot',
        sentTime: '15 mins ago'
    }
]

export let users: User[] = [
    {
        id: '1',
        name: 'Emily',
        src: 'https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg',
        isOnline: true
    },
    {
        id: '2',
        name: 'Eliot',
        src: 'https://demo.chatscope.io/static/media/eliot.d7038eac.svg',
        isOnline: true
    }
]

export let conversations: UserConversation[] = [
    {
        id: 1,
        title: 'Eliot',
        subtitle: 'Hello my friend',
        date: new Date(),
        avatar: 'https://demo.chatscope.io/static/media/eliot.d7038eac.svg',
        alt: 'eliot',
        unread: 3
    },
    {
        id: 2,
        title: 'Eliot',
        subtitle: 'Hello my friend',
        date: new Date(),
        avatar: 'https://demo.chatscope.io/static/media/eliot.d7038eac.svg',
        alt: 'eliot',
        unread: 3
    },
    {
        id: 3,
        title: 'Eliot',
        subtitle: 'Hello my friend',
        date: new Date(),
        avatar: 'https://demo.chatscope.io/static/media/eliot.d7038eac.svg',
        alt: 'eliot',
        unread: 3
    },
    {
        id: 4,
        title: 'Eliot',
        subtitle: 'Hello my friend',
        date: new Date(),
        avatar: 'https://demo.chatscope.io/static/media/eliot.d7038eac.svg',
        alt: 'eliot',
        unread: 3
    }
]