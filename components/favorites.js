import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {removeFavorite} from '../redux/actions';
import Animes from './Animes';

const Favorites = () => {
    const {favorites} = useSelector(state => state.reducer);
    return (
      <View style={{flex: 1, marginTop: 44, paddingHorizontal: 20}}>
        <Animes data={favorites} /> 
      </View>
    );
  };
  export default Favorites;