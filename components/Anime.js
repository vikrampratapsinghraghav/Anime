import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {  addFavorite, removeFavorite } from '../redux/actions';

export default function Animes({ anime, navigation }) {
    const { favorites } = useSelector(state => state.reducer);
    const dispatch = useDispatch();

    const addToFavorites = item => dispatch(addFavorite(item));
    const removeFromFavorites = item => dispatch(removeFavorite(item));
    const handleAddFavorite = anime => {
        addToFavorites(anime);
    };
    const handleRemoveFavorite = anime => {
        removeFromFavorites(anime);
    };
    const exists = item => {
        if (favorites.filter(anime => anime.mal_id === item.mal_id).length > 0) {
            return true;
        }
        return false;
    };
    return (
        <TouchableOpacity style={{ marginVertical: 12 }} onPress={()=>{
            navigation.navigate('AnimeDetail', { anime: anime })

        }}>
            <View style={{ flexDirection: 'row', flex: 1 }}>

                <Image
                    source={{
                        uri: anime.images.jpg.image_url,
                    }}
                    resizeMode="cover"
                    style={{ width: 100, height: 150, borderRadius: 10 }}
                />
                <View style={{ flex: 1, marginLeft: 12 }}>
                    <View>
                        <Text style={{ fontSize: 22, paddingRight: 16, color: 'black' }}>
                            {anime.title}
                        </Text>
                    </View>
                    <View
                        style={{
                            // flexDirection: 'row',
                            marginTop: 10,
                            alignanimes: 'flex-start',
                        }}>
                        <Text
                            style={{
                                fontSize: 18,
                                paddingLeft: 10,
                                color: '#64676D',
                            }}>
                            {anime.rating}
                        </Text>
                        <Text
                            style={{
                                fontSize: 18,
                                paddingLeft: 10,
                                color: '#64676D',
                            }}>
                            {anime.score}
                        </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text
                            style={{
                                fontSize: 18,
                                paddingLeft: 10,
                                color: '#64676D',
                            }}>
                            {anime.year}
                        </Text>
                        <TouchableOpacity
                            onPress={() =>
                                exists(anime) ? handleRemoveFavorite(anime) : handleAddFavorite(anime)
                            }
                        // other props remain the same
                        >
                            <MaterialIcons
                                color="orange"
                                size={32}
                                name={exists(anime) ? 'favorite' : 'favorite-outline'}
                            />
                        </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

}