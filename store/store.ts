import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { characterSlice } from "./characterSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
	configureStore({
		reducer: {
			[characterSlice.name]: characterSlice.reducer,
		},
		devTools: true,
	});

// export type AppStore = ReturnType<typeof makeStore>;
// export type AppState = ReturnType<AppStore["getState"]>;
// export type AppThunk<ReturnType = void> = ThunkAction<
// 	ReturnType,
// 	AppState,
// 	unknown,
// 	Action
// >;

// export const wrapper = createWrapper<AppStore>(makeStore);

export const storeWrapper = createWrapper(makeStore);
