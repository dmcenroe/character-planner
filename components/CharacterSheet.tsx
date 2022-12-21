import React, { useState, useEffect } from "react";

export default function CharacterSheet({ getSelectedSlot, selectedItem }) {
	const [selectedSlot, setSelectedSlot] = useState("");
	const [slotImageURL, setSlotImageURL] = useState(null);
	const [charProfile, setCharProfile] = useState({});

	const handleInventoryClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		setSelectedSlot(event.currentTarget.id);
		getSelectedSlot(event.currentTarget.id);

		const invSlotSelected = document.getElementsByClassName(
			"inventory-slot-selected"
		);

		if (invSlotSelected.length > 0) {
			invSlotSelected[0].classList.add("inventory-slot");
			invSlotSelected[0].classList.remove("inventory-slot-selected");
		}

		event.currentTarget.classList.remove("inventory-slot");
		event.currentTarget.classList.add("inventory-slot-selected");
	};

	return (
		<div className="flex-col border w-96 px-3 py-3">
			<div id="top" className="flex gap-8 pb-3">
				<div
					id="leftEar"
					className="inventory-slot"
					onClick={(event) => {
						handleInventoryClick(event);
					}}
				>
					Ear
				</div>
				<div
					id="face"
					className="inventory-slot"
					onClick={(event) => {
						handleInventoryClick(event);
					}}
				>
					Face
				</div>
				<div
					id="head"
					className="inventory-slot"
					onClick={(event) => {
						handleInventoryClick(event);
					}}
				>
					Head
				</div>
				<div
					id="rightEar"
					className="inventory-slot"
					onClick={(event) => {
						handleInventoryClick(event);
					}}
				>
					Ear
				</div>
			</div>
			<div className="flex gap-0.5 pb-3 justify-between">
				<div id="left-side border flex gap-0.5">
					<div
						id="chest"
						className="inventory-slot"
						onClick={(event) => {
							handleInventoryClick(event);
						}}
					>
						Chest
					</div>
					<div
						id="arms"
						className="inventory-slot"
						onClick={(event) => {
							handleInventoryClick(event);
						}}
					>
						Arms
					</div>
					<div
						id="waist"
						className="inventory-slot"
						onClick={(event) => {
							handleInventoryClick(event);
						}}
					>
						Waist
					</div>
					<div
						id="leftBracer"
						className="inventory-slot"
						onClick={(event) => {
							handleInventoryClick(event);
						}}
					>
						Bracer
					</div>
					<div
						id="legs"
						className="inventory-slot"
						onClick={(event) => {
							handleInventoryClick(event);
						}}
					>
						Legs
					</div>
				</div>
				<div id="right-side border flex gap-0.5">
					<div
						id="neck"
						className="inventory-slot"
						onClick={(event) => {
							handleInventoryClick(event);
						}}
					>
						Neck
					</div>
					<div
						id="back"
						className="inventory-slot"
						onClick={(event) => {
							handleInventoryClick(event);
						}}
					>
						Back
					</div>
					<div
						id="shoulder"
						className="inventory-slot"
						onClick={(event) => {
							handleInventoryClick(event);
						}}
					>
						Shoulder
					</div>
					<div
						id="rightBracer"
						className="inventory-slot"
						onClick={(event) => {
							handleInventoryClick(event);
						}}
					>
						Bracer
					</div>
					<div
						id="feet"
						className="inventory-slot"
						onClick={(event) => {
							handleInventoryClick(event);
						}}
					>
						Feet
					</div>
				</div>
			</div>
			<div
				id="bottom"
				className="flex gap-0.5 mb-3 place-content-center border"
			>
				<div
					id="leftRing"
					className="inventory-slot"
					onClick={(event) => {
						handleInventoryClick(event);
					}}
				>
					Finger
				</div>
				<div
					id="rightRing"
					className="inventory-slot"
					onClick={(event) => {
						handleInventoryClick(event);
					}}
				>
					Finger
				</div>
			</div>
			<div id="weapons" className="flex gap-0.5 place-content-center border">
				<div
					id="primary"
					className="inventory-slot relative"
					// style={{
					// 	backgroundImage: `${slotImageURL}`,
					// }}
					onClick={(event) => {
						handleInventoryClick(event);
					}}
				>
					Primary
				</div>
				<div
					id="secondary"
					className="inventory-slot relative"
					// style={{
					// 	backgroundImage: `${slotImageURL}`,
					// }}
					onClick={(event) => {
						handleInventoryClick(event);
					}}
				>
					Secondary
				</div>
				<div
					id="range"
					className="inventory-slot"
					onClick={(event) => {
						handleInventoryClick(event);
					}}
				>
					Range
				</div>
			</div>
		</div>
	);
}
