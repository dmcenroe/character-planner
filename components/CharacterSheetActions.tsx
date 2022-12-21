import React from "react";
import { app, database } from "../firebase/clientApp";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export default function CharacterSheetActions({ getItemIcon }) {
	const handleSaveClick = () => {
		const equippedItems = document.querySelectorAll("[data-item-id]");

		const equippedItemsArr = Array.from(equippedItems);

		const equippedItemsObj = {};

		equippedItemsArr.forEach((item) => {
			equippedItemsObj[item.id] = item.dataset.itemId;
		});

		saveGearSet(equippedItemsObj);
	};

	const saveGearSet = (equippedItemsObj) => {
		const dbInstance = collection(database, "savedGearSets");
		const q = addDoc(dbInstance, {
			userid: 2,
			name: "newtestset",
			equippedItems: equippedItemsObj,
		});
	};

	const handleLoadClick = () => {
		getGearSet();
	};

	const getGearSet = async () => {
		const dbInstance = collection(database, "savedGearSets");
		const q = query(dbInstance, where("userid", "==", 2));

		const equippedItems = await getDocs(q).then((data) => {
			return data.docs.map((savedGearSet) => savedGearSet.data());
		});

		console.log("saved gearset", equippedItems);

		populateCharSheet(equippedItems[0].equippedItems);
	};

	const populateCharSheet = (equippedItems) => {
		const itemSlots = Array.from(
			document.querySelectorAll("div.inventory-slot")
		);
		const itemKeys = Object.keys(equippedItems);

		itemSlots.forEach((slot) => {
			const slotName = slot.id;

			if (itemKeys.includes(slotName)) {
				const itemId = equippedItems[slotName];

				slot.textContent = "";
				slot.dataset.itemId = itemId;
				const img = document.createElement("ins");
				const iconId = getItemIcon(itemId);
				console.log(iconId);
				img.style.backgroundImage = `url(http://items.sodeq.org/img/item_${iconId}.png)`;
				slot?.appendChild(img);
			}
		});
	};

	return (
		<div className="flex justify-end w-96 mb-2 gap-2">
			<button
				className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				onClick={() => {
					handleLoadClick();
				}}
			>
				Load Gear Set
			</button>
			<button
				className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				onClick={() => {
					handleSaveClick();
				}}
			>
				Save Gear Set
			</button>
		</div>
	);
}
