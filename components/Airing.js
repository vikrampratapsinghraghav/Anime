import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getAiring } from '../redux/actions'
import Animes from './Animes';
import  Search  from './Search';

export default function Airing({navigation}) {
  const { airing } = useSelector(state => state.reducer);

  useEffect(()=>{
    setListData(airing)
  },[airing])
  const [listData,setListData] = useState(airing);
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Search listData={listData} setListData={setListData} originalData={airing} />
       <Animes data={listData} navigation={navigation} />
    </View>
  );
}