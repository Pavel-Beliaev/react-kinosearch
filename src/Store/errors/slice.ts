import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type errorState = {
    error: unknown
}

const initialState: errorState = {
    error: {}
}

export const errorSLice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setErrorMessage(state, action: PayloadAction<unknown>) {
            state.error = action.payload
        },
    },
})

export const {
    setErrorMessage
} = errorSLice.actions;

export default errorSLice.reducer