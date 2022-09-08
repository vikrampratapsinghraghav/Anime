import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { addFavorite, removeFavorite } from '../redux/actions';

export default function Animes({ route, navigation }) {
    console.log('Navigation--->', route.params.anime);
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
        <View style={{ marginVertical: 12, paddingHorizontal: 12 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => {
                    navigation.pop()
                }}>
                    <MaterialIcons
                        color="black"
                        size={32}
                        name={'arrow-back'}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() =>
                        exists(route.params.anime) ? handleRemoveFavorite(route.params.anime) : handleAddFavorite(route.params.anime)
                    }
                // other props remain the same
                >
                    <MaterialIcons
                        color="orange"
                        size={32}
                        name={exists(route.params.anime) ? 'favorite' : 'favorite-outline'}
                    />
                </TouchableOpacity>
            </View>

            <View style={{ paddingTop: 20 }}>

                <Image
                    source={{
                        uri: route.params.anime.images.jpg.large_image_url,
                    }}
                    resizeMode="cover"
                    style={{ width: '100%', height: 150, borderRadius: 10, alignSelf: 'center' }}
                />

                <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, marginTop: 20 }}>

                    <View style={styles.textContainer}>
                        <Text style={styles.text1}>Title</Text>
                        <Text style={styles.text2}>{route.params.anime.title}</Text>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.text1}>Source</Text>
                        <Text style={styles.text2}>{route.params.anime.source}</Text>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.text1}>Airing</Text>
                        <Text style={styles.text2}>{route.params.anime.airing}</Text>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.text1}>Popularity</Text>
                        <Text style={styles.text2}>{route.params.anime.popularity}</Text>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.text1}>Favorites</Text>
                        <Text style={styles.text2}>{route.params.anime.favorites}</Text>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.text1}>Year</Text>
                        <Text style={styles.text2}>{route.params.anime.year}</Text>
                    </View>


                </View>

            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    text1: {
        fontSize: 16,
        color: 'black'
    },
    text2: {
        fontSize: 16,
        color: 'black',
        fontWeight: "bold"
    },
    textContainer: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 }
});