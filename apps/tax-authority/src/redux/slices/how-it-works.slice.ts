// store/howItWorksSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HowItWorksState {
    toggleGroupValue: string;
}

const initialState: HowItWorksState = {
    toggleGroupValue: "import", // default value
};

const howItWorksSlice = createSlice({
    name: 'howItWorks',
    initialState,
    reducers: {
        setToggleGroupValue(state, action: PayloadAction<string>) {
            state.toggleGroupValue = action.payload;
        },
    },
});

export const { setToggleGroupValue } = howItWorksSlice.actions;
export default howItWorksSlice.reducer;
