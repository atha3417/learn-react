import React from 'react'

function Card({ title, imageUrl, published, children }) {
	return (
		<div className="bg-red-300 rounded-md shadow-sm overflow-hidden max-w-sm">
			<img className="mb-3" src={imageUrl} alt={title} />
			<div className="pl-4 pb-5">
				<h1 className="font-medium text-2xl">{title}</h1>
				<small className="text-gray-600 text-xs">{published}</small>
				{children}
			</div>
		</div>
	)
}

export default Card