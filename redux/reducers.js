import {GET_AIRING,ADD_FAVORITE_ITEM,REMOVE_FAVORITE_ITEM, GET_UPCOMING, GET_COMPLETE} from './actions';
const initialState = {
  airing: [],
  upcoming: [],
  complete: [],
  favorites: [],
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_AIRING:
      return {...state, airing: action.payload};
      case GET_UPCOMING:
        return {...state, upcoming: action.payload};
        case GET_COMPLETE:
          return {...state, complete: action.payload};
      case ADD_FAVORITE_ITEM:
      return {...state, favorites: [...state.favorites, action.payload]};
    case REMOVE_FAVORITE_ITEM:
      return {
        ...state,
        favorites: state.favorites.filter(
          anime => anime.mal_id !== action.payload.mal_id,
        ),
      };
    default:
      return state;
  }
}
export default reducer;