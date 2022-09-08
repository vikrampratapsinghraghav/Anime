export const GET_AIRING = 'GET_AIRING';
export const GET_UPCOMING = 'GET_UPCOMING';
export const GET_COMPLETE = 'GET_COMPLETE';
export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';
import axios from 'axios';
export const addFavorite = item => dispatch => {
    dispatch({
      type: ADD_FAVORITE_ITEM,
      payload: item,
    });
  };
  export const removeFavorite = item => dispatch => {
    dispatch({
      type: REMOVE_FAVORITE_ITEM,
      payload: item,
    });
  };
  export const getAiring = (currentPage) => {
    try {
      return async dispatch => {
        const res = await axios.get(`https://api.jikan.moe/v4/seasons/now?page=${currentPage}`);
        console.log('res--->', JSON.stringify(res.data.data));
        if (res.data.data) {
            const airing = [];
            const complete = [];
            res.data.data.forEach(element => {
                if(element.episodes===null)
                airing.push(element)
                else complete.push(element)
            });
          dispatch({
            type: GET_AIRING,
            payload: airing,
          });
          dispatch({
            type: GET_COMPLETE,
            payload: complete,
          });
        } else {
          console.log('Unable to fetch');
        }
      };
    } catch (error) {
      // Add custom logic to handle errors
    }
  };
  export const getUpComing = (currentPage) => {
    try {
      return async dispatch => {
        const res = await axios.get(`https://api.jikan.moe/v4/seasons/upcoming?page=${currentPage}`);
        console.log('res--->', JSON.stringify(res.data.data));
        if (res.data.data) {
          dispatch({
            type: GET_UPCOMING,
            payload: res.data.data,
          });
        } else {
          console.log('Unable to fetch');
        }
      };
    } catch (error) {
      // Add custom logic to handle errors
    }
  };
