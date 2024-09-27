import { User, UserConversation, UserMessage } from "./types"

export let messagesFakeData: UserMessage[] = [
    {
        id: '1',
        direction: 'left',
        message: 'Hello!',
        sender: 'Emily',
        sentTime: (new Date().getTime() - 1000000).toString()
    },
    {
        id: '2',
        direction: 'left',
        message: 'How are you doing today?',
        sender: 'Emily',
        sentTime: (new Date().getTime() - 1000000).toString()
    },
    {
        id: '3',
        direction: 'left',
        message: 'Hey! What\'s up? :)',
        sender: 'Eliot',
        sentTime: (new Date().getTime() - 1000000).toString()
    },
    {
        id: '4',
        direction: 'left',
        message: 'It was great this weekend',
        sender: 'Marc',
        sentTime: (new Date().getTime() - 1000000).toString()
    },
    {
        id: '6',
        direction: 'left',
        message: 'You helped me a lot!',
        sender: 'Lin',
        sentTime: (new Date().getTime() - 10000000).toString()
    },
    {
        id: '7',
        direction: 'left',
        message: 'Thank you!',
        sender: 'Lin',
        sentTime: (new Date().getTime() - 10000000).toString()
    }
]

export let friendsFakeData: User[] = [
    {
        id: '1',
        name: 'Emily',
        src: 'https://img.freepik.com/premium-photo/cute-dog-profile-picture_923558-6578.jpg',
        isOnline: true
    },
    {
        id: '2',
        name: 'Eliot',
        src: 'https://img.freepik.com/premium-photo/bunnylicious-adventure-cute-vibrant-instagram-profile-pic-with-shiny-bunny-wearing-carrot_983420-22483.jpg',
        isOnline: false
    },
    {
        id: '3',
        name: 'Marc',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjO3cWPjIFy0XcZ5HzyDetj_GF3cnOapYp9g&s',
        isOnline: true
    },
    {
        id: '4',
        name: 'Lin',
        src: 'https://cdn.meiker.io/assets/100918/2022/08/icon_2022081403545262f8720c5e7ec.png',
        isOnline: false
    }
]

export let conversationsFakeData: UserConversation[] = [
    {
        id: 1,
        title: 'Emily',
        subtitle: 'How are you doing today?',
        date: new Date(),
        avatar: 'https://img.freepik.com/premium-photo/cute-dog-profile-picture_923558-6578.jpg',
        alt: 'eliot',
        unread: 0
    },
    {
        id: 2,
        title: 'Eliot',
        subtitle: 'Hey! What\'s up? :)',
        date: new Date(),
        avatar: 'https://img.freepik.com/premium-photo/bunnylicious-adventure-cute-vibrant-instagram-profile-pic-with-shiny-bunny-wearing-carrot_983420-22483.jpg',
        alt: 'eliot',
        unread: 1
    },
    {
        id: 3,
        title: 'Marc',
        subtitle: 'It was great this weekend',
        date: new Date(),
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjO3cWPjIFy0XcZ5HzyDetj_GF3cnOapYp9g&s',
        alt: 'eliot',
        unread: 1
    },
    {
        id: 4,
        title: 'Lin',
        subtitle: 'Thank you!',
        date: new Date(new Date().getTime() - 10000000),
        avatar: 'https://cdn.meiker.io/assets/100918/2022/08/icon_2022081403545262f8720c5e7ec.png',
        alt: 'eliot',
        unread: 2
    }
]

export let userFakeData: User = {
    id: '0',
    name: 'Jean',
    src: 'https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg',
    isOnline: true
}