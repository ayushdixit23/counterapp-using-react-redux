import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
	name: "counter",
	initialState: {
		value: 0
	},
	reducers: {
		add(state, action) {
			state.value += 1
		},
		sub(state, action) {
			state.value -= 1
		}
	}
})

export default counter.reducer
export const { add, sub } = counter.actions