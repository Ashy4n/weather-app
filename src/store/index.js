import { createSlice, configureStore } from '@reduxjs/toolkit'

const modals = createSlice({
    name: 'modals',
    initialState: { dataDisplay: false, isLoading: false },
    reducers: {
        toggle(state) {
            state.dataDisplay = !state.dataDisplay
        },
        toggleLoading(state){
            state.isLoading = !state.isLoading
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

const marker = createSlice({
    name: 'marker',
    initialState: { lat: 52.04, lng: 19.28 },
    reducers: {
        setMarker(state, action) {
            state.lat = action.payload.lat
            state.lon = action.payload.lon
        },
    }
})

const store = configureStore({
    reducer: {
        modals: modals.reducer,
        dataToDisplay: dataToDisplay.reducer,
        marker:marker.reducer
    }
});

export const modalsActions = modals.actions;
export const dataActions = dataToDisplay.actions;
export const markerActions = marker.actions;

export default store;