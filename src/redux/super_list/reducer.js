import { createSlice, combineReducers } from "@reduxjs/toolkit";
import moment from "moment";
import uuid from "react-native-uuid"
const super_list_reducer = createSlice({
    name: "super_list",
    initialState: {
        loading: false,
        error: false,
        data: []
    },
    reducers: {
        createSuperList(state, action) {
            const list = {
                "id": uuid.v4(),
                "title": action.payload,
                "created": moment().format("YYYY-MM-DD HH:mm:ss"),
                "items_count": 0,
                "items_check": 0,
                "total": 0
            }
            state.data = [...state.data, ...[list]]
        },
        archiveSuperList(state, action) {

        },
        updateSuperList(state, action) {

        },
        trashSuperList(state, action) {
            state.loading = true
            state.data = state.data.filter(it => it.id != action.payload.id)
            state.loading = false
        },
        deleteSuperList(state, action) {

        }
    }
})

export const {
    createSuperList,
    updateSuperList,
    deleteSuperList,
    trashSuperList,
    archiveSuperList
} = super_list_reducer.actions

export default super_list_reducer.reducer