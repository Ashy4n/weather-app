import { createSlice, configureStore } from '@reduxjs/toolkit'

const modals = createSlice({
    name: 'modals',
    initialState: { dataDisplay: false },
    reducers: {
        toggle(state) {
            state.dataDisplay = !state.dataDisplay
        }
    }
})

const dataToDisplay = createSlice({
    name: 'dataToDisplay',
    initialState: { displayData: null },
    reducers: {
        saveData(state, action) {
            state.displayData = action.payload
        },
    }
})

const store = configureStore({
    reducer: {
        modals: modals.reducer,
        dataToDisplay: dataToDisplay.reducer
    }
});

export const modalsActions = modals.actions;
export const dataActions = dataToDisplay.actions;


export default store;