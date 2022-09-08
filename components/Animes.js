import React from 'react';
import { FlatList } from 'react-native';

import Anime from './Anime';

export default function Animes({ data, navigation, hitAPi, currentPage, setCurrentPage }) {
    return (
        <FlatList
            data={data}
            keyExtractor={item => item.mal_id.toString()}
            renderItem={({ item }) => {
                return (
                    <Anime anime={item} navigation={navigation} />
                );
            }}
            showsVerticalScrollIndicator={false}
            onEndReached={()=>{
                // hitAPi(currentPage);
                // setCurrentPage(currentPage+1);
            }}
            onEndReachedThreshold ={0.1}
        />
    )

}