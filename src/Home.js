import React from "react";
import { FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";

const testData = [
    { id: 1, name: "Massage", price: "100.000" },
    { id: 2, name: "Facial", price: "200.000" },
    { id: 3, name: "Body Scrub", price: "300.000" },
    { id: 4, name: "Manicure", price: "150.000" },
    { id: 5, name: "Pedicure", price: "150.000" },
];

const Home = () => {
    const Item = ({ name, price }) => {
        return (
            <TouchableOpacity
                style={styles.itemRow}
                onPress={() => {
                
                }}
            >

                <Text style={styles.text}>{name}</Text>
                <Text style={styles.textPrice}>{price}đ</Text>
            </TouchableOpacity>

        );
    }
    return (

        <View style={styles.container}>

            <Text style={styles.titleText}>KAMI SPA</Text>

            <View style={styles.row}>
                <Text style={styles.text}>Danh sách dịch vụ</Text>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>


            </View>
            <FlatList
                data={testData}
                renderItem={({ item }) => <Item name={item.name} price={item.price} />}
                keyExtractor={(item) => item.id.toString()}
            />

        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 10,
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: '#EF506B',
        textAlign: "center",
        marginBottom: 20,
    },
    row: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        color: 'black',
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#EF506B",
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        borderRadius: 50,

    },
    buttonText: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 20,
    },
    itemRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,

    },
    textPrice: {
        fontSize: 20,
        color: 'gray',
    },
})

export default Home;