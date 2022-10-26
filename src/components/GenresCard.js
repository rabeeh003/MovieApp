import React from "react";
import {View, Text, StyleSheet, Dimensions} from "react-native";
import Colors from "../constents/Colors";

const {width} = Dimensions.get("screen")
const setWidth = (w) => (width/100) * w;

const GenresCard = ({genreName}) => {
    return (
        <View style={styles.container}>
            <Text>{genreName}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
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
});

export default GenresCard;