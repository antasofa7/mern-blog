import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Home, Login, Register } from '../../pages'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Routes path="/register">
                    <Register />
                </Routes>
                <Routes path="/login">
                    <Login />
                </Routes>
                <Routes path="/">
                    <Home />
                </Routes>
            </Switch>
        </Router>
    )
}

export default Routes
