import React, { FC, useCallback } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

export interface RouterPropsInterface {
    isSignedIn: boolean
}

const Router: FC<RouterPropsInterface> = ({
    isSignedIn,
}) => {
    const renderIndexPage = useCallback(() => {
        if (isSignedIn) {
            return (
                <Home />
            )
        }
        return (
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
