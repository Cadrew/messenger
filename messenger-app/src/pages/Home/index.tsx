import "react-chat-elements/dist/main.css"
import ChatContainer from "../../components/ChatContainer"
import ConversationList from "../../components/ConversationList"
import { conversations, messages, users } from "../../dataTest"
import style from './style.module.scss'

function Home() {
  return (
    <div className={style.app}>
      <div className={style.leftDivContainer}>
        <ConversationList conversations={conversations} />
      </div>
      <div className={style.rightDivContainer}>
        <ChatContainer messages={messages} user={users[0]} />
      </div>
    </div>
  )
}

export default Home;
