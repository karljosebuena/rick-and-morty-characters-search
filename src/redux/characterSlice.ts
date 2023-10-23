import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '@/generated/graphql';


export interface CharacterState {
  character: Character | null;
  searchText: string;
  searchPage: number;
}

// define initial state
const initialState: CharacterState = {
  character: null,
  searchText: "",
  searchPage: 1,
};

// create slice
export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacter: (state, action: PayloadAction<Character>) => {
      state.character = action.payload;
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setSearchPage: (state, action: PayloadAction<number>) => {
      state.searchPage = action.payload;
    },
  },
});

// export action
export const { setCharacter, setSearchText, setSearchPage } = characterSlice.actions;

// export selector
export const characterSelector = (state: { character: CharacterState }) => state.character;
export const searchTextSelector = (state: { character: CharacterState }) => state.character.searchText;
export const searchPageSelector = (state: { character: CharacterState }) => state.character.searchPage;

// export reducer
export default characterSlice.reducer;