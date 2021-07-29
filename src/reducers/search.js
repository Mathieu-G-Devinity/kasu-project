/* eslint-disable linebreak-style */
import { SAVE_MANGA_SEARCH, SAVE_SEARCH_RESULTS, SEARCH_BY_MANGA_NAME, SET_MANGA_SEARCH, SET_SEARCH } from '../actions/search';
import { LOGOUT_USER } from '../actions/user';

export const initialState = {
  search: '',
  searchData: {},
  mangaSearch: '',
  mangaSearchData: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.search,
      };
    case SAVE_SEARCH_RESULTS:
      return {
        ...state,
        searchData: action.searchData,
      };
    case SET_MANGA_SEARCH:
      return {
        ...state,
        mangaSearch: action.mangaSearch,
      };
    case SAVE_MANGA_SEARCH:
      return {
        ...state,
        mangaSearchData: action.mangaData,
      };
    case LOGOUT_USER:
      return {
        search: '',
        searchData: {},
        mangaSearch: '',
        mangaSearchData: [],
      };
    default:
      return state;
  }
};

export default reducer;