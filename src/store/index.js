import axios from "axios"
import { atom, selector } from 'recoil'

const theme = atom({
	key: 'switch-theme',
	default: 'light'
})

const authUser = selector({
	key: 'auth-user',
	get: async () => {
		let user = null

		try {
			let { data } = await axios.get('https://jsonplaceholder.typicode.com/users/3')
			user = { user: data }
		} catch (e) {
			user = { user: e.message }
		}

		return user
	}
})

export { authUser, theme }