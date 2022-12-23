import React from "react";
import { app, database } from "../firebase/clientApp";
import { collection, addDoc, getDocs, query, where, doc, getDoc, DocumentSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { displayPartsToString } from "typescript";

export default function CharacterSheetActions({
	getItemIcon,
	getItemName,
	allUsers,
}) {

    const [userGearSets, setUserGearSets] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        
    },[allUsers])
    

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

        const gearSetInput = document.getElementById('save-set-input') as HTMLInputElement;

        if(gearSetInput.value) {
            const dbInstance = collection(database, "savedGearSets");
            const q = addDoc(dbInstance, {
                userid: currentUser,
                name: gearSetInput.value,
                equippedItems: equippedItemsObj,
            });
        }

        gearSetInput.value="";
		
	};

	const handleLoadClick = async () => {
        const savedGearDropDown = document.getElementById('gear-set-select') as HTMLOptionElement;
        const selectedGearSetId = savedGearDropDown.value
        const gearSetToLoad = await getOneGearSet(selectedGearSetId);
		populateCharSheet(gearSetToLoad);
	};

    const handleUserChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        //only getting current user on change, doesn't work on page load
       const userId = event.target.value;
       setCurrentUser(Number(userId))
       getGearSets(userId)
       clearCharSheet();
       
    }

    const getOneGearSet = async (id) => {
        const docRef = doc(database, "savedGearSets", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
         console.log("Document data:", docSnap.data());
         return docSnap.data().equippedItems
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }

    }
  

	const getGearSets = async (userId) => {
        const dbInstance = collection(database, "savedGearSets");
		const q = query(dbInstance, where("userid", "==", Number(userId)));

		const equippedItems = await getDocs(q).then((data) => {
			return data.docs.map((savedGearSet) => {
                const id = savedGearSet.id;
                let data = savedGearSet.data();
                data.id = id;
                return {data}
            });
		});

        console.log(equippedItems)
        setUserGearSets(equippedItems);

	};

    const clearCharSheet = () => {

        const itemSlots = Array.from(
			document.querySelectorAll("div.inventory-slot")
		);

        const invSlotSelected = document.getElementsByClassName(
			"inventory-slot-selected"
		);

        if (invSlotSelected.length > 0) {
			invSlotSelected[0].classList.add("inventory-slot");
			invSlotSelected[0].classList.remove("inventory-slot-selected");
		}


        const insertsToDelete = document.querySelectorAll("ins")

        insertsToDelete.forEach((ins) => {
            ins.remove();
        })

        const linksToDelete = Array.from(document.getElementsByClassName("item-link"))

        linksToDelete.forEach((link) => {
            link.remove();
        });

        itemSlots.map((slot) => {
            slot.removeAttribute('data-item-id')
        });
    }


	const populateCharSheet = (equippedItems) => {

        
		const itemSlots = Array.from(
			document.querySelectorAll("div.inventory-slot")
		);

        clearCharSheet(itemSlots)

		const itemKeys = Object.keys(equippedItems);

		itemSlots.forEach((slot) => {
			const slotName = slot.id;

			if (itemKeys.includes(slotName)) {
				const itemId = equippedItems[slotName];


				slot.dataset.itemId = itemId;

				const img = document.createElement("ins");
				const iconId = getItemIcon(itemId);
				img.style.backgroundImage = `url(http://items.sodeq.org/img/item_${iconId}.png)`;
				slot?.appendChild(img);

				const itemName = getItemName(itemId);
				const zamLink = document.createElement("a");
				zamLink.href = "";
                zamLink.classList.add('item-link')
				zamLink.dataset.eq = `item=${itemName}`;
				slot?.appendChild(zamLink);
			}
		});
	};

	return (
		<div className="flex w-full mb-2">
            <div className="flex gap-2 w-full items-center">
			<label htmlFor="user-select" className="sr-only">
				User
			</label>
			<select onChange={(event)=> {handleUserChange(event)}} id="user-select"  name='user-select' 
            className="h-10 w-1/5 block py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">>
				{allUsers.map((user) => (
					<option key={user.id} value={user.id}>
						{user.fName}
					</option>
				))}
			</select>
            <label htmlFor="gear-set-select" className="sr-only">
				User
			</label>
            <div className="flex items-center justify-end w-full gap-2 mr-2">
			<select id="gear-set-select"  name='gear-set-select' 
            className="h-10 w-2/5 block py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">>
				{userGearSets.map((set) => (
					<option key={set.data.id} value={set.data.id}>
                        {console.dir(set.data)}
						{set.data.name}
					</option>
				))}
			</select>
            <button
				className="h-8 text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
				onClick={() => {
					handleLoadClick();
				}}
			>
				Load
			</button>
            </div>
            </div>
            <div className="flex items-center w-full justify-end gap-2">
            <input placeholder="gear set name..." id='save-set-input' 
            className="h-8 w-max text-sm shadow appearance-none rounded w-2/3 p-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
			
			<button
				className="h-8 w-1/8 m text-sm mr-2 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
				onClick={() => {
					handleSaveClick();
				}}
			>
                Save
			</button>
            </div>
		</div>
	);
}
