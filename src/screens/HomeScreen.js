import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View, ScrollView, FlatList} from 'react-native';
import Colors from '../constents/Colors';
import GenresCard from '../components/GenresCard';
import ItemSeparator from '../components/itemComponent';
import FONTS from '../constents/FONTS';
import MovieCard from '../components/MovieCard';
import { getNowPlayingMovies } from '../services/MovieService';

const Genres = ["All","Action","Comady","Romance","Horrer","Sci-Fi"];

const HomeScreen = () => {

  const [activeGenre, setActiveGenre] = useState("All")
  const [nowPlayingMovies, setNowPlayingMovies] = useState({});

  useEffect(() => {
    getNowPlayingMovies().then(movieResponse => 
    setNowPlayingMovies(movieResponse.data) 
    );
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" translucent={false} backgroundColor={Colors.BASIC_BG}/>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Now Playing</Text>
        <Text style={styles.headerSubTitle}>VIEW ALL</Text>
      </View>
      <View style={styles.genreListContainer}>
        <FlatList 
          data={Genres}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          ItemSeparatorComponent={() => <ItemSeparator width={20}/>}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) =>( 
            <GenresCard 
              genreName={item} 
              active={item === activeGenre ? true : false} 
              onPress={ setActiveGenre}
            />
          )}
        />
      </View>
      <View >
        <FlatList 
          data={nowPlayingMovies.results}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20}/>}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) =>( 
            <MovieCard
              title={item.title}
              language={item.original_language}
              voteAverage={item.vote_average}
              voteCount={item.vote_count}
              poster={item.poster_path}
            />
          )}
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: Colors.BASIC_BG,
  },
  headerContainer:{
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems:"center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle:{
    fontSize: 28,
    fontFamily: FONTS.REGULER,
  },
  headerSubTitle:{
    fontSize: 13,
    color: Colors.ACTIVE,
    fontFamily: FONTS.BOLD
  },
  genreListContainer:{
    paddingVertical: 10,
  }
});

export default HomeScreen