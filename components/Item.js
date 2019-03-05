import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

const Item = (props) => {
    return (
            <View key={props.index} style={styles.item_div}>
                <Image
                    style={styles.img}
                    source={{uri: props.item.data.thumbnail}}
                />
                <Text style={styles.text}>{props.item.data.title}</Text>

            </View>
    );
};

const styles = StyleSheet.create({
    item_div: {
        borderColor: '#808080',
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
        borderRadius: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    text: {
        color: '#000',
        marginTop: 10,
        fontSize: 20,
        width: 100,
        marginLeft: 20,
    },
    img: {
        height: 200,
        width: 200,
    }

});

export default Item;