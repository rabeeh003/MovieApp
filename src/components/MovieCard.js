import React, {useState} from "react";
import { ImageBackground, TouchableNativeFeedback, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image} from "react-native-web";
import Colors from "../constents/Colors";
import FONTS from "../constents/FONTS"
import { Ionicons } from '@expo/vector-icons';
import { getPoster } from "../services/MovieService";

const MovieCard = ({title, language, voteAverage, voteCount, poster}) => {

  const [liked, setLiked] = useState(false)

  return (
    <TouchableOpacity 
      onPress={() => setLiked(!liked)}>
        <ImageBackground 
          style={styles.container}
          imageStyle={{ borderRadius: 12 }}
          source={{ uri: getPoster(poster) }}  
        >
            <View  style={styles.imdbover}>
              <Text style={styles.imdb}>IMDB</Text>
              <Text>{voteAverage}</Text>
            </View>
            <TouchableNativeFeedback >
              <Ionicons name={liked ? "heart" : "heart-outline"} size={25} color={ liked ? Colors.HEART : Colors.WHITE} style={{position: "absolute", top:270, left: 10}}/>
            </TouchableNativeFeedback>
        </ImageBackground>
        <View>
            <Text style={styles.movieTitle} numberOfLines={2} >{title} </Text>
            <View style={styles.movieSubTitleContainer}>
                <Text style={styles.movieSubTitle}>{language}</Text>
                <View style={styles.rowAndCenter}>
                  <Ionicons name="heart" size={17} color={Colors.HEART} style={{marginRight: 5}}/>
                  <Text>{voteCount}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.ACTIVE,
      height: 340,
      width: 230,
      borderRadius: 15,
      elevation: 5,
      marginVertical: 2,
    },
    movieTitle:{
      fontSize: 14,
      fontFamily: FONTS.SEMIBOLD,
      color: Colors.GRAY,
      marginTop:5,
      paddingVertical:2,
      width: 230,
    },
    movieSubTitleContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop:4,

    },
    movieSubTitle:{
      fontSize: 12,
      fontFamily: FONTS.REGULER
    },
    rowAndCenter:{
      flexDirection: "row",
      alignItems: "center",
    },
    imdbover:{
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "flex-end",
      backgroundColor: Colors.YELLOW,
      borderTopRightRadius:15,
      borderBottomLeftRadius:7,
      paddingRight: 5,
    },
    imdb:{
      fontFamily: FONTS.BOLD,
      fontSize: 16,
      paddingRight: 10,
      paddingleft: 10,
      padding:5,
    }
  });

export default MovieCard;