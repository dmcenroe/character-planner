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

export default function DynamicSearch({ allWeapons, selectedSlot, allArmor }) {
	const [searchString, setSearchString] = useState("");
	const [armorData, setArmorData] = useState([]);
	const [weaponData, setWeaponData] = useState([]);
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		setArmorData(allArmor);
		setWeaponData(allWeapons);
		setSearchResults(allWeapons.slice(0, 11));
	}, [allWeapons, allArmor]);

	useEffect(() => {
		if (searchString.length > 2) {
			const results = filterSearch();
			setSearchResults(results.slice(0, 11));
		}

		if (searchString.length === 0) {
			setSearchResults(weaponData.slice(0, 11));
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
	};

	const filterSearch = () => {
		const allItems = [...armorData, ...weaponData];

		return allItems.filter((item) => {
			return item.Name.toLowerCase().includes(searchString.toLowerCase());
		});
	};

	const handleItemClick = (selectedItem) => {
		const slot = document.getElementById(selectedSlot);
		if (slot) {
			// slot.textContent = "";
			// const zamLink = document.createElement("a");
			// zamLink.href = "http://war.allakhazam.com/db/item.html?waritem=402307";
			// slot?.appendChild(zamLink);

			console.log(slot);

			slot.dataset.itemId = selectedItem.id;
			console.log(slot);
			const img = document.createElement("ins");
			img.style.backgroundImage = `url(http://items.sodeq.org/img/item_${selectedItem.icon}.png)`;
			slot?.appendChild(img);

			const itemName = selectedItem.Name;
			const link = document.createElement("a");
			link.href = "";
			link.className = "item-link";
			link.dataset.eq = `item=${itemName}`;
			slot?.appendChild(link);
		}
	};

	return (
		<div className="flex-col w-96">
			<div className="flex gap-3 pb-4 px-4">
				<input
					autoComplete="off"
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
							className="w-full bg-[#4e4e86] hover:bg-blue-400 cursor-pointer px-2 py-1 mb-0.5 text-stone-200"
							onClick={() => {
								handleItemClick(item);
							}}
						>
							<div className="item-search-result flex gap-5 items-center py-px relative">
								<a
									className="item-link"
									href=""
									data-eq={`item=${item.Name}`}
								></a>
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
