import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '@/generated/graphql';

export interface CharacterState {
  characterData: Character | null;
  searchText: string;
  searchPage: number;
  generatingInfoFromOpenAi: boolean;
  generatedCharacterInfo: string;
}

// define initial state
const initialState: CharacterState = {
  characterData: null,
  searchText: '',
  searchPage: 1,
  generatingInfoFromOpenAi: false,
  generatedCharacterInfo: ''
};

// create slice
export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacterData: (state, action: PayloadAction<Character>) => {
      state.characterData = action.payload;
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setSearchPage: (state, action: PayloadAction<number>) => {
      state.searchPage = action.payload;
    },
    setGeneratingInfoFromOpenAi: (state, action: PayloadAction<boolean>) => {
      state.generatingInfoFromOpenAi = action.payload;
    },
    setGeneratedCharacterInfo: (state, action: PayloadAction<string>) => {
      state.generatedCharacterInfo = action.payload;
    }
  }
});

// export action
export const { setCharacterData, setSearchText, setSearchPage, setGeneratingInfoFromOpenAi, setGeneratedCharacterInfo } = characterSlice.actions;

// export selector
export const characterDataSelector = (state: { character: CharacterState }) => state.character.characterData;
export const searchTextSelector = (state: { character: CharacterState }) => state.character.searchText;
export const searchPageSelector = (state: { character: CharacterState }) => state.character.searchPage;
export const generatingInfoFromOpenAiSelector = (state: { character: CharacterState }) => state.character.generatingInfoFromOpenAi;
export const generatedCharacterInfoSelector = (state: { character: CharacterState }) => state.character.generatedCharacterInfo;

// export reducer
export default characterSlice.reducer;
