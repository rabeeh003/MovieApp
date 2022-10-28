import React, {useState} from "react";
import { ImageBackground, TouchableNativeFeedback, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image} from "react-native-web";
import Colors from "../constents/Colors";
import FONTS from "../constents/FONTS"
import { Ionicons } from '@expo/vector-icons';
import { getPoster,getLanguage } from "../services/MovieService";

const MovieCard = ({title, language, voteAverage, voteCount, poster, size}) => {

  const [liked, setLiked] = useState(false);
  const [voteCountValue, setVoteCountValue] = useState(voteCount);

  return (
    <TouchableOpacity activeOpacity={0.9}>
        <ImageBackground 
          style={{ ...styles.container, width: 230 * size, height: 340 * size }}
          imageStyle={{ borderRadius: 15 }}
          source={{ uri: getPoster(poster) }}  
        >
            <View  style={{...styles.imdbover, paddingVertical: 3 * size}}>
              <Text style={styles.imdb}>IMDB</Text>
              <Text>{voteAverage}</Text>
            </View>
            <TouchableNativeFeedback 
              onPress={() => {
                setLiked(!liked);
                setVoteCountValue(
                  liked ? voteCountValue - 1 : voteCountValue + 1
                );
              }}>
              <Ionicons name={liked ? "heart" : "heart-outline"} size={25 * size} color={ liked ? Colors.HEART : Colors.WHITE} style={{position: "absolute", top:270, left: 10}}/>
            </TouchableNativeFeedback>
        </ImageBackground>
        <View>
            <Text style={{...styles.movieTitle,  width: 230 * size }} numberOfLines={2} >{title} </Text>
            <View style={styles.movieSubTitleContainer}>
                <Text style={styles.movieSubTitle}>{getLanguage(language).english_name}</Text>
                <View style={styles.rowAndCenter}>
                  <Ionicons name="heart" size={17 * size} color={Colors.HEART} style={{marginRight: 5}}/>
                  <Text>{voteCountValue}</Text>
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
    },
    
  });
  MovieCard.defaultProps = {
    size:1,
  }

export default MovieCard;