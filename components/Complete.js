import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getAiring } from '../redux/actions'
import Animes from './Animes';
import  Search  from './Search';

export default function Complete({ navigation }) {
  const { complete } = useSelector(state => state.reducer);
  const [listData,setListData] = useState(complete);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const fetchAiring = (currentPage) => dispatch(getAiring(currentPage));
  useEffect(() => {
    fetchAiring(currentPage);
  }, [currentPage]);
  useEffect(() => {
   setListData(complete)
  }, [complete]);
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Search listData={listData} setListData={setListData} originalData={complete} />
      <Animes data={listData} navigation={navigation} currentPage={currentPage} hitAPi={fetchAiring} setCurrentPage={setCurrentPage} />
    </View>
  );
}