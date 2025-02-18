// store/howItWorksSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HowItWorksState {
    feature: string;
}

const initialState: HowItWorksState = {
    feature: "tax-computation", // default value
};

const featuresSlice = createSlice({
    name: 'features',
    initialState,
    reducers: {
        setFeatureValue(state, action: PayloadAction<string>) {
            state.feature = action.payload;
        },
    },
});

export const { setFeatureValue } = featuresSlice.actions;
export default featuresSlice.reducer;
