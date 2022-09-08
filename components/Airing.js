import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import Animes from './Animes';
import  Search  from './Search';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';

export default function Airing({navigation}) {
  const { airing } = useSelector(state => state.reducer);

  useEffect(()=>{
    setListData(airing)
  },[airing])
  const [listData,setListData] = useState(airing);
  if(listData)
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Search listData={listData} setListData={setListData} originalData={airing} />
       <Animes data={listData} navigation={navigation} />
    </View>
  );
  return(
<View>
  <Bubbles size={10} color="#FFF" />
  <Bars size={10} color="#FDAAFF" />
  <Pulse size={10} color="#52AB42" />
  <DoubleBounce size={10} color="#1CAFF6" />
</View>
  );
}