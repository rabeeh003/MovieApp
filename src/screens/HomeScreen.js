import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View, ScrollView, FlatList} from 'react-native';
import Colors from '../constents/Colors';
import GenresCard from '../components/GenresCard';
import ItemSeparator from '../components/itemComponent';

const Genres = ["All","Action","Comady","Romance","Horrer","Sci-Fi"];

const HomeScreen = () => {
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
          renderItem={({ item }) => <GenresCard genreName={item}/>}
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
  },
  headerSubTitle:{
    fontSize: 13,
    color: Colors.ACTIVE
  },
  genreListContainer:{
    paddingVertical: 10,
  }
});

export default HomeScreen