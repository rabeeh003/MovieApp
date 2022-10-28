import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View, ScrollView, FlatList} from 'react-native';
import Colors from '../constents/Colors';
import GenresCard from '../components/GenresCard';
import ItemSeparator from '../components/itemComponent';
import FONTS from '../constents/FONTS';
import MovieCard from '../components/MovieCard';
import { getNowPlayingMovies, getUpcomingMovies, getAllGenres } from '../services/MovieService';

const HomeScreen = () => {

  const [activeGenre, setActiveGenre] = useState("All")
  const [nowPlayingMovies, setNowPlayingMovies] = useState({});
  const [upcomingMovies, setUpcomingMovies] = useState({});
  const [genres, setGenres] = useState([{ id: 10110, name: "All" }]);



  useEffect(() => {
    getNowPlayingMovies().then(movieResponse => 
      setNowPlayingMovies(movieResponse.data) 
    );
    getUpcomingMovies().then(movieResponse => 
      setUpcomingMovies(movieResponse.data) 
    );
    getAllGenres().then((genreResponse) =>
      setGenres([...genres, ...genreResponse.data.genres])
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
          data={genres}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20}/>}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) =>( 
            <GenresCard 
              genreName={item.name} 
              active={item.name === activeGenre ? true : false} 
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
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Coming Soon</Text>
        <Text style={styles.headerSubTitle}>VIEW ALL</Text>
      </View>
      <View>
      <FlatList 
          data={upcomingMovies.results}
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
              size={0.6}
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