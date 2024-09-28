import { useEffect, useState } from "react"
import "react-chat-elements/dist/main.css"
import { Provider } from "react-redux"
import './app.scss'
import Router from "./Router"
import store from "./store"
import { useAppSelector } from "./store/hooks"

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App() {
  const currentUser = useAppSelector((state) => state.user.user)
  const currentToken = useAppSelector((state) => state.user.idToken)
  const [isSignedIn, setSignedIn] = useState<boolean>(false)

  useEffect(() => {
    if (currentToken && currentUser) setSignedIn(true)
    else setSignedIn(false)
  }, [currentUser, currentToken])

  return (
    <div className='App'>
      <Router isSignedIn={isSignedIn} />
    </div>
  );
}

export default AppWrapper;
