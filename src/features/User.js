import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: '', age: 0, email: ''};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            // state = action.payload;
            const {name, age, email} = action.payload ?? {};
            return {
                ...state,
                name,
                age,
                email
            }
        },
        logout: (state) => {
            return initialState;
        }
    },
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;