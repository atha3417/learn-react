import React from 'react'

function Card({ title, children }) {
	return (
		<div className="bg-gradient-to-r from-gray-300 to-gray-400/80 rounded-md shadow-sm overflow-hidden max-w-sm">
			<div className="pl-4 pb-5 pt-3">
				<h1 className="font-medium text-2xl mb-3">{title}</h1>
				{children}
			</div>
		</div>
	)
}

export default Card