import { app, database } from "../firebase/clientApp";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";

// export async function getStaticProps() {
// 	const dbInstance = collection(database, "items");
// 	getDocs(dbInstance).then((data) => {
// 		console.log(data);
// 	});

// return {
// 	props: {
// 		allItems,
// 	},
// };
// }

// const getItems = async () => {
// 	const dbInstance = collection(database, "items");
// 	const q = query(dbInstance, where("Name", "==", "Cloth Shirt"));

// 	await getDocs(q).then((data) => {
// 		data.docs.map((item) => {
// 			console.log(item.data());
// 		});
// 	});
// getDocs(dbInstance).then((data) => {
// 	console.log(data);
// });
// };

// getItems();

export default function DynamicSearch() {
	const [searchString, setSearchString] = useState("");
	const [armorData, setArmorData] = useState([]);
	const [weaponData, setWeaponData] = useState([]);
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		//setArmorData
		//setWeaponData
	}, []); //watch prop?

	const handleClick = () => {
		console.log(searchString);
		//filter array based on search string
		//setSearchResult
		//map thru search results in the <ul>
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchString(event.target.value);
	};

	const handleItemClick = (
		event: React.MouseEvent<HTMLLIElement, MouseEvent>
	) => {};

	return (
		<div className="flex-col border w-1/3 py-4">
			<div className="flex gap-3 pb-4 px-4">
				<input
					className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="item-search"
					type="text"
					onChange={(event) => {
						handleChange(event);
					}}
				></input>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					onClick={() => {
						handleClick();
					}}
				>
					Search
				</button>
			</div>

			<ul className="mx-4 border">
				<li
					className="w-full bg-blue-300 hover:bg-blue-400 cursor-pointer px-2 py-1 mb-0.5"
					onClick={(event) => {
						handleItemClick(event);
					}}
				>
					search result 1
				</li>
				<li className="w-full bg-blue-300 hover:bg-blue-400 cursor-pointer px-2 py-1 mb-0.5">
					search result 2
				</li>
				<li className="w-full bg-blue-300 hover:bg-blue-400 cursor-pointer px-2 py-1 mb-0.5">
					search result 3
				</li>
			</ul>
		</div>
	);
}
