import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-gesture-handler";

const Detail = ({route, navigation}) => {
    const {name, price, creator, time, update} = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                <Text style={{fontWeight: "bold"}}>Service name:</Text> {name}
            </Text>
            <Text style={styles.text}>
                <Text style={{fontWeight: "bold"}}>Price:</Text> {price}
            </Text>
            <Text style={styles.text}>
                <Text style={{fontWeight: "bold"}}>Creator:</Text> {creator}
            </Text>
            <Text style={styles.text}>
                <Text style={{fontWeight: "bold"}}>Time:</Text> {time}
            </Text>
            <Text style={styles.text}>
                <Text style={{fontWeight: "bold"}}>Final update:</Text> {update}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    text: {
        fontSize: 20,
    }
})

export default Detail;