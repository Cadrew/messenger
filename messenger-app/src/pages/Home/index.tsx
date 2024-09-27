import { useCallback, useEffect } from "react"
import "react-chat-elements/dist/main.css"
import ChatContainer from "../../components/ChatContainer"
import ConversationList from "../../components/ConversationList"
import { conversationsFakeData, friendsFakeData, messagesFakeData, userFakeData } from "../../fakeData"
import { setConversations, setMessages } from "../../store/conversation/conversation"
import { setFriends } from "../../store/friend/friend"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { setUser } from "../../store/user/user"
import { User } from "../../types"
import style from './style.module.scss'

function Home() {
  const dispatch = useAppDispatch()
  const conversations = useAppSelector((state) => state.conversation.conversations)
  const messages = useAppSelector((state) => state.conversation.messages)
  const friends = useAppSelector((state) => state.friend.friends)
  const activeConversation = useAppSelector((state) => state.conversation.active)

  useEffect(() => {
    // let's simulate a request from DB to get data
    dispatch(setConversations(conversationsFakeData))
    dispatch(setFriends(friendsFakeData))
    dispatch(setMessages(messagesFakeData))
    dispatch(setUser(userFakeData))
  }, [dispatch])

  const getActiveFriend = useCallback((): User => {
    const friendName = conversations.find((conversation) => conversation.id === activeConversation).title
    return friends.find((friend) => friend.name === friendName)
  }, [conversations, friends, activeConversation])


  return (
    <div className={style.app}>
      <div className={style.leftDivContainer}>
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
