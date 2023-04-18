import {FilterSliceState} from "./@types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: FilterSliceState = {
    searchValue: '',
    page: 1,
}
export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
          state.page = action.payload
        },
    },
})

export const {setPage} = filterSlice.actions;

export default filterSlice.reducer