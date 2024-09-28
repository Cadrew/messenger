import React, { FC, useCallback, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAppDispatch } from './store/hooks'
import Home from './pages/Home'
import Login from './pages/Login'

export interface RouterPropsInterface {
    isSignedIn: boolean
}

const Router: FC<RouterPropsInterface> = ({
    isSignedIn,
}) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        // TODO: get user       
    }, [isSignedIn, dispatch])

    const renderIndexPage = useCallback(() => {
        if (isSignedIn) {
            return (
                <Home />
            )
        }
        return (
            // <Login setSignedIn={setSignedIn} setSignedOut={setSignedOut} />
            <Login />
        )
    }, [isSignedIn])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={renderIndexPage()}/>
                <Route path="*" element={<h1>Oops - Page Not Found :(</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
