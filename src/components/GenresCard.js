import React from "react";
import {TouchableOpacity, Text, StyleSheet, Dimensions} from "react-native";
import Colors from "../constents/Colors";

const {width} = Dimensions.get("screen")
const setWidth = (w) => (width/100) * w;

const GenresCard = ({genreName, actvie,  onPress}) => {
    return (
        <TouchableOpacity 
            style={{...style.container, backgroundColor: actvie ? Colors.ACTIVE : Colors.WHITE}}
            activeOpacity={0.5} 
            onPress={() => onPress(genreName)}
        >
            <Text style={{...style.textStyle, color: actvie ? Colors.WHITE : Colors.BLACK}} >{genreName}</Text>
        </TouchableOpacity>
    )
};

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: Colors.WHITE,
        paddingVertical: 8,
        elevation: 3,
        marginVertical: 2,
        width: setWidth(25)
    },
    textStyle:{
        color: Colors.ACTIVE,
    },
});

export default GenresCard;