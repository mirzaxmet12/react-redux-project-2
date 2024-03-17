import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { text } from "stream/consumers";

const changeState = createSlice({
    name: 'changeSlice',
    initialState: {
        text: 'In between'
    },
    reducers: {
        changeText(state, action: PayloadAction<{ text: string }>) {
            state.text = action.payload.text
        }
    }

})

export const {changeText}=changeState.actions
export default changeState.reducer