import React from "react";
import {View,} from "react-native";

const ItemSeparator = ({height, width}) => {
    return <View style={{width, height}} />
}

ItemSeparator.defualtProps = {
    height: 0,
    width: 0
}

export default ItemSeparator