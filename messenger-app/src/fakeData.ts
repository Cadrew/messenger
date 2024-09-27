import { User, UserConversation, UserMessage } from "./types"

export let messagesFakeData: UserMessage[] = [
    {
        id: '1',
        direction: 'left',
        message: 'Hello my friend',
        sender: 'Emily',
        sentTime: (new Date().getTime() - 1000000).toString()
    },
    {
        id: '2',
        direction: 'right',
        message: 'Hello my friend',
        sender: 'Eliot',
        sentTime: (new Date().getTime() - 1000000).toString()
    },
    {
        id: '3',
        direction: 'left',
        message: 'Hello my friend',
        sender: 'Emily',
        sentTime: (new Date().getTime() - 1000000).toString()
    },
    {
        id: '4',
        direction: 'right',
        message: 'Hello my friend',
        sender: 'Eliot',
        sentTime: (new Date().getTime() - 1000000).toString()
    },
    {
        id: '5',
        direction: 'left',
        message: 'Hello my friend',
        sender: 'Emily',
        sentTime: (new Date().getTime() - 1000000).toString()
    },
    {
        id: '6',
        direction: 'right',
        message: 'Hello my friend',
        sender: 'Eliot',
        sentTime: (new Date().getTime() - 1000000).toString()
    }
]

export let friendsFakeData: User[] = [
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

export let conversationsFakeData: UserConversation[] = [
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

export let userFakeData: User = {
        id: '0',
        name: 'Jean',
        src: 'https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg',
        isOnline: true
    }