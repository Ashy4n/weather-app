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

const history = createSlice({
    name: 'history',
    initialState: { pageNum: 1, allQueries:null },
    reducers: {
        setPageNum(state,action) {
            state.pageNum = action.payload;
        },
          setAllQueries(state,action) {
            state.allQueries = action.payload;
        }
    }
})

const store = configureStore({
    reducer: {
        modals: modals.reducer,
        dataToDisplay: dataToDisplay.reducer,
        history: history.reducer
    }
});

export const modalsActions = modals.actions;
export const dataActions = dataToDisplay.actions;
export const historyActions = history.actions;

export default store;