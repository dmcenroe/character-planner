import React, { useState, useEffect } from "react";

export default function CharacterSheet({ getSelectedSlot }) {
	const handleInventoryClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
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
					className="inventory-slot bg-[url('../public/eqicons/ear.jpg')] bg-no-repeat bg-contain"
					onClick={(event) => {
						handleInventoryClick(event);
					}}
				></div>
				<div
					id="face"
					className="inventory-slot bg-[url('../public/eqicons/face.jpg')] bg-no-repeat bg-contain"
					onClick={(event) => {
						handleInventoryClick(event);
					}}
				></div>
				<div
					id="head"
					className="inventory-slot bg-[url('../public/eqicons/head.jpg')] bg-no-repeat bg-contain"
					onClick={(event) => {
						handleInventoryClick(event);
					}}
				></div>
				<div
					id="rightEar"
					className="inventory-slot bg-[url('../public/eqicons/ear.jpg')] bg-no-repeat bg-contain"
					onClick={(event) => {
						handleInventoryClick(event);
					}}
				></div>
			</div>
			<div className="flex gap-0.5 pb-3 justify-between">
				<div id="left-side flex gap-0.5">
					<div
						id="chest"
						className="inventory-slot bg-[url('../public/eqicons/chest.jpg')] bg-no-repeat bg-contain"
						onClick={(event) => {
							handleInventoryClick(event);
						}}
					></div>
					<div
						id="arms"
						className="inventory-slot bg-[url('../public/eqicons/arms.jpg')] bg-no-repeat bg-contain"
						onClick={(event) => {
							handleInventoryClick(event);
						}}
					></div>
					<div
						id="waist"
						className="inventory-slot bg-[url('../public/eqicons/waist.jpg')] bg-no-repeat bg-contain"
						onClick={(event) => {
							handleInventoryClick(event);
						}}
					></div>
					<div
						id="leftBracer"
						className="inventory-slot bg-[url('../public/eqicons/bracer.jpg')] bg-no-repeat bg-contain"
						onClick={(event) => {
							handleInventoryClick(event);
						}}
					></div>
					<div
						id="legs"
						className="inventory-slot bg-[url('../public/eqicons/legs.jpg')] bg-no-repeat bg-contain"
						onClick={(event) => {
							handleInventoryClick(event);
						}}
					></div>
				</div>
				<div id="right-side flex gap-0.5">
					<div
						id="neck"
						className="inventory-slot bg-[url('../public/eqicons/neck.jpg')] bg-no-repeat bg-contain"
						onClick={(event) => {
							handleInventoryClick(event);
						}}
					></div>
					<div
						id="back"
						className="inventory-slot bg-[url('../public/eqicons/back.jpg')] bg-no-repeat bg-contain"
						onClick={(event) => {
							handleInventoryClick(event);
						}}
					></div>
					<div
						id="shoulder"
						className="inventory-slot bg-[url('../public/eqicons/shoulders.jpg')] bg-no-repeat bg-contain"
						onClick={(event) => {
							handleInventoryClick(event);
						}}
					></div>
					<div
						id="rightBracer"
						className="inventory-slot bg-[url('../public/eqicons/bracer.jpg')] bg-no-repeat bg-contain"
						onClick={(event) => {
							handleInventoryClick(event);
						}}
					></div>
					<div
						id="feet"
						className="inventory-slot bg-[url('../public/eqicons/feet.jpg')] bg-no-repeat bg-contain"
						onClick={(event) => {
							handleInventoryClick(event);
						}}
					></div>
				</div>
			</div>
			<div id="bottom" className="flex gap-0.5 mb-3 place-content-center">
				<div
					id="leftRing"
					className="inventory-slot bg-[url('../public/eqicons/finger.jpg')] bg-no-repeat bg-contain"
					onClick={(event) => {
						handleInventoryClick(event);
					}}
				></div>
				<div
					id="rightRing"
					className="inventory-slot bg-[url('../public/eqicons/finger.jpg')] bg-no-repeat bg-contain"
					onClick={(event) => {
						handleInventoryClick(event);
					}}
				></div>
			</div>
			<div id="weapons" className="flex gap-0.5 place-content-center">
				<div
					id="primary"
					className="inventory-slot bg-[url('../public/eqicons/primary.jpg')] bg-no-repeat bg-contain"
					onClick={(event) => {
						handleInventoryClick(event);
					}}
				></div>
				<div
					id="secondary"
					className="inventory-slot bg-[url('../public/eqicons/secondary.jpg')] bg-no-repeat bg-contain"
					onClick={(event) => {
						handleInventoryClick(event);
					}}
				></div>
				<div
					id="range"
					className="inventory-slot bg-[url('../public/eqicons/range.jpg')] bg-no-repeat bg-contain"
					onClick={(event) => {
						handleInventoryClick(event);
					}}
				></div>
			</div>
		</div>
	);
}
