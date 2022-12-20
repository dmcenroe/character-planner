import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

const initialState: { [key: string]: number | null } = {
	helmId: null,
	chestId: null,
	weaponId: null,
	offHandId: null,
};

export const characterSlice = createSlice({
	name: "character",
	initialState,
	reducers: {
		setCharacterState(state, action) {
			state = action.payload;
		},
		// Special reducer for hydrating the state. Special case for next-redux-wrapper
		extraReducers: {
			[HYDRATE]: (state, action) => {
				return {
					...state,
					...action.payload,
				};
			},
		},
	},
});

export const { setCharacterState } = characterSlice.actions;
