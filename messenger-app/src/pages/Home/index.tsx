import { useEffect } from "react"
import "react-chat-elements/dist/main.css"
import ChatContainer from "../../components/ChatContainer"
import ConversationList from "../../components/ConversationList"
import { conversationsFakeData, friendsFakeData, messagesFakeData, userFakeData } from "../../fakeData"
import { setConversations, setMessages } from "../../store/conversation/conversation"
import { setFriends } from "../../store/friend/friend"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { setUser } from "../../store/user/user"
import style from './style.module.scss'

function Home() {
  const dispatch = useAppDispatch()
  const conversations = useAppSelector((state) => state.conversation.conversations)
  const messages = useAppSelector((state) => state.conversation.messages)
  const friends = useAppSelector((state) => state.friend.friends)
  const currentUser = useAppSelector((state) => state.user.user)

  useEffect(() => {
    // let's simulate a request from DB to get data
    dispatch(setConversations(conversationsFakeData))
    dispatch(setFriends(friendsFakeData))
    dispatch(setMessages(messagesFakeData))
    dispatch(setUser(userFakeData))
  }, [conversations, currentUser, dispatch])


  return (
    <div className={style.app}>
      <div className={style.leftDivContainer}>
        <ConversationList conversations={conversations} />
      </div>
      {friends ? 
        <div className={style.rightDivContainer}>
        <ChatContainer messages={messages} user={friends[0]} />
      </div> : null}
    </div>
  )
}

export default Home;
