import "react-chat-elements/dist/main.css"
import { Provider } from "react-redux"
import './app.scss'
import Home from "./pages/Home"
import store from "./store"

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App() {
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default AppWrapper;
