import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import type {RootState} from '../redux/store';

interface IGuessedNumberState {
  value: number;
}

const initialState: IGuessedNumberState = {
  value: 0,
};

export const guessedNumberSlice = createSlice({
  name: 'guessedNumber',
  initialState,
  reducers: {
    setGuessedNumber: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const {setGuessedNumber} = guessedNumberSlice.actions;
export default guessedNumberSlice.reducer;
