import React from 'react'
import Card from "../Components/Card"

function App() {
	return (
		<div className="py-4 px-16">
			<h1 className="text-3xl font-bold mb-5 px-4 py-2.5">The Posts</h1>
			<div className="flex justify-around">
				<Card title="The First Post" published="28, Dec 2021" imageUrl="http://placekitten.com/384/270">
					<p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quisquam soluta! Sint cupiditate dolore natus repudiandae voluptatum a, mollitia magnam harum atque qui praesentium illum quia eligendi. Quasi, repellat sapiente.</p>
				</Card>

				<Card title="The Second Post" published="29, Dec 2021" imageUrl="http://placekitten.com/g/384/270">
					<p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, in soluta atque recusandae tempora rem ipsum ipsa suscipit quis impedit deserunt ratione voluptas modi corrupti minima qui id harum aspernatur?</p>
				</Card>

				<Card title="The First Post" published="30, Dec 2021" imageUrl="http://placekitten.com/384/270">
					<p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores ipsa delectus! Sequi praesentium odit perspiciatis obcaecati velit? Ex, architecto laborum? Ad laborum inventore enim accusantium dolores soluta error distinctio.</p>
				</Card>
			</div>
		</div>
	)
}

export default App