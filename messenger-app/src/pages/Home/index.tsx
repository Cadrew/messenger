import { FC, useCallback, useEffect } from "react"
import "react-chat-elements/dist/main.css"
import ChatContainer from "../../components/ChatContainer"
import ConversationList from "../../components/ConversationList"
import { conversationsFakeData, friendsFakeData, messagesFakeData } from "../../fakeData"
import { setConversations, setMessages } from "../../store/conversation/conversation"
import { setFriends } from "../../store/friend/friend"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { User } from "../../types"
import style from './style.module.scss'

const Home: FC = () => {
  const dispatch = useAppDispatch()
  const conversations = useAppSelector((state) => state.conversation.conversations)
  const messages = useAppSelector((state) => state.conversation.messages)
  const friends = useAppSelector((state) => state.friend.friends)
  const currentUser = useAppSelector((state) => state.user.user)
  const activeConversation = useAppSelector((state) => state.conversation.active)

  useEffect(() => {
    // it simulates a request from DB to get data
    dispatch(setConversations(conversationsFakeData))
    dispatch(setFriends(friendsFakeData))
    dispatch(setMessages(messagesFakeData))
  }, [dispatch])

  const getActiveFriend = useCallback((): User => {
    const friendName = conversations.find((conversation) => conversation.id === activeConversation).title
    return friends.find((friend) => friend.name === friendName)
  }, [conversations, friends, activeConversation])


  return (
    <div className={style.app}>
      <div className={style.leftDivContainer}>
        <div className={style.titleArea}>
          <label className={style.userName}>{currentUser? currentUser.name : ''}</label>
          <label className={style.userStatus}>Online</label>
        </div>
        <div className={style.contactsArea}>Contacts</div>
        <ConversationList conversations={conversations} />
      </div>
      {friends ? 
        <div className={style.rightDivContainer}>
        <ChatContainer messages={messages} user={getActiveFriend()} />
      </div> : null}
    </div>
  )
}

export default Home;
