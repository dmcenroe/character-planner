import React, { useState, useEffect } from "react";
import Image from "next/image";

export const classFinder = (shortClassStr: string) => {
	const classObj: { [key: string]: number } = {
		WAR: 1,
		CLR: 2,
		PAL: 4,
		RNG: 8,
		SHD: 16,
		DRU: 32,
		MNK: 64,
		BRD: 128,
		ROG: 256,
		SHM: 512,
		NEC: 1024,
		WIZ: 2048,
		MAG: 4096,
		ENC: 8192,
		BST: 16384,
		ALL: 65535,
	};

	return classObj[shortClassStr];
};

export const slotFinder = (slot: string) => {
	const slotObj: { [key: string]: number } = {
		charm: 1,
		leftEar: 2,
		head: 4,
		face: 8,
		rightEar: 16,
		neck: 32,
		shoulder: 64,
		arms: 128,
		back: 256,
		leftBracer: 512,
		rightBracer: 1024,
		range: 2048,
		hands: 4096,
		primary: 8192,
		secondary: 16384,
		leftRing: 32768,
		rightRing: 65536,
		chest: 131072,
		legs: 262144,
		feet: 524288,
		waist: 1048576,
	};

	return slotObj[slot];
};

export default function DynamicSearch({
	allWeapons,
	selectedSlot,
	getSelectedItem,
}) {
	const [searchString, setSearchString] = useState("");
	const [armorData, setArmorData] = useState([]);
	const [weaponData, setWeaponData] = useState([]);
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		//setArmorData
		setWeaponData(allWeapons);
	}, [allWeapons]); //watch prop?

	useEffect(() => {
		if (searchString.length > 2) {
			const results = filterSearch();
			setSearchResults(results.slice(0, 5));
		}

		if (searchString.length === 0) {
			setSearchResults(weaponData.slice(0, 5));
		}
	}, [searchString]);

	const handleClick = () => {
		// console.log(searchString);
		//filter array based on search string
		//setSearchResult
		//map thru search results in the <ul>
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchString(event.target.value);
		// setSearchResults(filterSearch());
	};

	const filterSearch = () => {
		return weaponData.filter((weapon) => {
			return weapon.Name.toLowerCase().includes(searchString.toLowerCase());
		});
	};

	const handleItemClick = (selectedItem) => {
		const slot = document.getElementById(selectedSlot);
		slot.textContent = "";
		slot.dataset.itemId = selectedItem.id;
		const img = document.createElement("ins");
		// img.style.backgroundColor = "black";
		img.style.backgroundImage = `url(http://items.sodeq.org/img/item_${selectedItem.icon}.png)`;
		slot?.appendChild(img);
	};

	return (
		<div className="flex-col border w-96 py-4 mt-5">
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
			{searchResults ? (
				<ul className="mx-4">
					{searchResults.map((item) => (
						<li
							key={item.id}
							className="w-full bg-blue-300 hover:bg-blue-400 cursor-pointer px-2 py-1 mb-0.5"
							onClick={() => {
								handleItemClick(item);
							}}
						>
							<div className="flex gap-5 items-center py-px">
								<Image
									src={`http://items.sodeq.org/img/item_${item.icon}.png`}
									height={35}
									width={35}
									alt="item image"
								/>
								{item.Name}
							</div>
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
}
