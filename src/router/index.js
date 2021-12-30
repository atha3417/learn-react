import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import Dashboard from '../views/Dashboard'
import About from '../views/About'
import Contact from "../views/Contact"
import NotFound from "../views/errors/NotFound"
import Navbar from "../components/Navbar"
import Login from "../views/auth/Login"
import Users from "../views/users/Index"
import User from "../views/users/User"
import Register from "../views/auth/Register"
import * as Middleware from "../middleware/App"

function Router() {
	return (
		<Routes>
			<Route path="/" element={<><Navbar /> <Home /></>} />
			<Route path="/dashboard" element={<Middleware.Authenticated render={<><Navbar /> <Dashboard /></>} />} />
			<Route path="/about" element={<><Navbar /> <About /></>} />
			<Route path="/contact" element={<><Navbar /> <Contact /></>} />

			<Route path="/users" element={<><Navbar /> <Users /></>} />
			<Route path="/users/:id" element={<><Navbar /> <User /></>} />

			<Route path="/login" element={<Middleware.Guest render={<Login />} />} />
			<Route path="/register" element={<Middleware.Guest render={<Register />} />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default Router
