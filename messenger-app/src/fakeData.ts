import { User, UserConversation, UserMessage } from "./types"

export let messagesFakeData: UserMessage[] = [
    {
        id: '1',
        direction: 'left',
        message: 'Hello!',
        sender: 'Emily',
        to: 'me',
        sentTime: (new Date().getTime() - 1000000).toString()
    },
    {
        id: '2',
        direction: 'left',
        message: 'How are you doing today?',
        sender: 'Emily',
        to: 'me',
        sentTime: (new Date().getTime() - 1000000).toString()
    },
    {
        id: '3',
        direction: 'left',
        message: 'Hey! What\'s up? :)',
        sender: 'Eliot',
        to: 'me',
        sentTime: (new Date().getTime() - 1000000).toString()
    },
    {
        id: '4',
        direction: 'left',
        message: 'It was great this weekend',
        sender: 'Marc',
        to: 'me',
        sentTime: (new Date().getTime() - 1000000).toString()
    },
    {
        id: '5',
        direction: 'left',
        message: 'Let\'s do it again next time ^^',
        sender: 'Marc',
        to: 'me',
        sentTime: (new Date().getTime() - 1000000).toString()
    },
    {
        id: '6',
        direction: 'left',
        message: 'You helped me a lot!',
        sender: 'Lin',
        to: 'me',
        sentTime: (new Date().getTime() - 10000000).toString()
    },
    {
        id: '7',
        direction: 'left',
        message: 'Thank you!',
        sender: 'Lin',
        to: 'me',
        sentTime: (new Date().getTime() - 10000000).toString()
    },
    {
        id: '8',
        direction: 'left',
        message: 'Do I know you?',
        sender: 'Aldegonde',
        to: 'me',
        sentTime: (new Date().getTime() - 80000000).toString()
    },
    {
        id: '9',
        direction: 'left',
        message: 'Hello :)',
        sender: 'Moussa',
        to: 'me',
        sentTime: (new Date().getTime() - 80000000).toString()
    },
    {
        id: '10',
        direction: 'left',
        message: 'Salut, t\'es là ?',
        sender: 'Donatien',
        to: 'me',
        sentTime: (new Date().getTime() - 80000000).toString()
    },
    {
        id: '11',
        direction: 'left',
        message: 'Hey, just to let you know',
        sender: 'Himiko',
        to: 'me',
        sentTime: (new Date().getTime() - 800000).toString()
    },
    {
        id: '12',
        direction: 'left',
        message: 'I\'m working today, but I\'ll be available tomorrow ;)',
        sender: 'Himiko',
        to: 'me',
        sentTime: (new Date().getTime() - 800000).toString()
    },
    {
        id: '13',
        direction: 'left',
        message: 'Oh no, not you again',
        sender: 'Jack',
        to: 'me',
        sentTime: (new Date().getTime() - 9000000000).toString()
    },
    {
        id: '14',
        direction: 'left',
        message: 'Are you there?',
        sender: 'Jorge',
        to: 'me',
        sentTime: (new Date().getTime() - 9000000000).toString()
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
    },
    {
        id: '5',
        name: 'Aldegonde',
        src: 'https://i0.wp.com/wallpapers.com/images/hd/cute-stitch-profile-picture-2pi7ctlxbr89bv8a.jpg?ssl=1',
        isOnline: false
    },
    {
        id: '6',
        name: 'Moussa',
        src: 'https://pbs.twimg.com/media/Fw4Ade5aIAIhH99.jpg',
        isOnline: true
    },
    {
        id: '7',
        name: 'Himiko',
        src: 'https://as1.ftcdn.net/v2/jpg/03/62/81/08/1000_F_362810827_6sVt0dzbB9rYBV74tilerj6ptiCvcinZ.jpg',
        isOnline: false
    },
    {
        id: '8',
        name: 'Donatien',
        src: 'https://www.creativefabrica.com/wp-content/uploads/2023/02/14/Cute-Boy-Searching-Something-Cartoon-Super-Cute-Profile-Pic-61207531-1.png',
        isOnline: true
    },
    {
        id: '9',
        name: 'Jack',
        src: 'https://wallpapers-clan.com/wp-content/uploads/2022/05/cute-pfp-03.jpg',
        isOnline: true
    },
    {
        id: '10',
        name: 'Jorge',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxbz8S46qH4I4g7PacDGHeZuKICCu7zk3zlA&s',
        isOnline: true
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
        subtitle: 'Let\'s do it again next time ^^',
        date: new Date(),
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjO3cWPjIFy0XcZ5HzyDetj_GF3cnOapYp9g&s',
        alt: 'eliot',
        unread: 1
    },
    {
        id: 4,
        title: 'Lin',
        subtitle: 'Thank you!',
        avatar: 'https://cdn.meiker.io/assets/100918/2022/08/icon_2022081403545262f8720c5e7ec.png',
        date: new Date(new Date().getTime() - 10000000),
        unread: 2
    },
    {
        id: 5,
        title: 'Aldegonde',
        subtitle: 'Do I know you?',
        avatar: 'https://i0.wp.com/wallpapers.com/images/hd/cute-stitch-profile-picture-2pi7ctlxbr89bv8a.jpg?ssl=1',
        date: new Date(new Date().getTime() - 80000000),
        unread: 0
    },
    {
        id: 6,
        title: 'Moussa',
        subtitle: 'Hello :)',
        avatar: 'https://pbs.twimg.com/media/Fw4Ade5aIAIhH99.jpg',
        date: new Date(new Date().getTime() - 80000000),
        unread: 0
    },
    {
        id: 7,
        title: 'Donatien',
        subtitle: 'Salut, t\'es là ?',
        avatar: 'https://www.creativefabrica.com/wp-content/uploads/2023/02/14/Cute-Boy-Searching-Something-Cartoon-Super-Cute-Profile-Pic-61207531-1.png',
        date: new Date(new Date().getTime() - 80000000),
        unread: 1
    },
    {
        id: 8,
        title: 'Himiko',
        subtitle: 'I\'m working today, but I\'ll be available tomorrow ;)',
        avatar: 'https://as1.ftcdn.net/v2/jpg/03/62/81/08/1000_F_362810827_6sVt0dzbB9rYBV74tilerj6ptiCvcinZ.jpg',
        date: new Date(new Date().getTime() - 800000),
        unread: 0
    },
    {
        id: 9,
        title: 'Jack',
        subtitle: 'Oh no, not you again',
        avatar: 'https://wallpapers-clan.com/wp-content/uploads/2022/05/cute-pfp-03.jpg',
        date: new Date(new Date().getTime() - 9000000000),
        unread: 0
    },
    {
        id: 10,
        title: 'Jorge',
        subtitle: 'Are you there?',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxbz8S46qH4I4g7PacDGHeZuKICCu7zk3zlA&s',
        date: new Date(new Date().getTime() - 9000000000),
        unread: 0
    }
]
