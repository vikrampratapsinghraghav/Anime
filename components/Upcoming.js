import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getUpComing } from '../redux/actions'
import Animes from './Animes';
import Search from './Search';

export default function Upcoming({ navigation }) {
  const { upcoming } = useSelector(state => state.reducer);

  const [listData, setListData] = useState(upcoming);
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const fetchUpcoming = (currentPage) => dispatch(getUpComing(currentPage));

  useEffect(() => {
    fetchUpcoming(currentPage);
  }, [currentPage]);
  useEffect(() => {
    setListData(upcoming)
  }, [upcoming]);
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>

      <Search listData={listData} setListData={setListData} originalData={upcoming} />
      <Animes data={listData} navigation={navigation} currentPage={currentPage} hitAPi={fetchUpcoming} setCurrentPage={setCurrentPage} />

    </View>
  );
}