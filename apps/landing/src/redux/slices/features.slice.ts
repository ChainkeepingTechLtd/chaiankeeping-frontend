import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FeaturesState {
    feature: string;
}

const initialState: FeaturesState = {
    feature: "1", // default value
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
