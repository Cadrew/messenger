import { FC, useCallback, useRef } from "react"
import cls from 'classnames'
import style from './style.module.scss'
import { Button } from "react-chat-elements"
import { useAppDispatch } from "../../store/hooks"
import { setIdToken, setUser } from "../../store/user/user"
import { AVATAR_DEFAULT } from "../../types"

const Login: FC = () => {
    const dispatch = useAppDispatch()
    const nameRef = useRef<HTMLInputElement>(null)

    const handleLogin = useCallback(() => {
        const name = nameRef.current.value
        if (!name) return        
        // it simulates a login process
        dispatch(setUser({
            id: '0',
            name: name,
            src: AVATAR_DEFAULT,
            isOnline: true
        }))
        dispatch(setIdToken('randomToken32TFFDV2AZDDKFERGER19eff23OF'))
    }, [dispatch])

    const handleKeyPress = (event) => {
        // look for the `Enter` keyCode
        if (event.keyCode === 13 || event.which === 13) {
            handleLogin()
        }
    }

    return (
        <div className={cls(style.wrapper, style.body)}>
            <h2>LOGIN</h2>
            <section className={style.group}>
                <input
                    type="text"
                    size={30}
                    className={style.input}
                    name="name"
                    ref={nameRef}
                    onKeyUp={handleKeyPress}
                    required
                />
                <label htmlFor="name" className={style.label}>
                    Enter your name
                </label>
            </section>
            <Button
                className={style.btn}
                text={"Sign in"}
                onClick={handleLogin}
                title="SignIn"
            />   
            <span className={style.footer}></span>
        </div>
    )
}

export default Login;
