"use client";
import { REGISTERED_EMAIL_ADDRESS } from "@/lib/constants";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
    registeredEmailAddress?: string;
}

const initialState: IAuthState = {
    registeredEmailAddress: '',
};

export const authStateSlice = createSlice({
    name: "authState",
    initialState,
    reducers: {
        storeRegisteredEmailAddress: (state, action: PayloadAction<string>) => {
            state.registeredEmailAddress = action.payload;
            localStorage.setItem(REGISTERED_EMAIL_ADDRESS, action.payload)
            return state;
        },
    },
});

export const { storeRegisteredEmailAddress } = authStateSlice.actions;

export default authStateSlice.reducer;
