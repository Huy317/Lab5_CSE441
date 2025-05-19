import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const AddService = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    
    const handleAddService = () => {
        Alert.alert("Add Service", `Service name: ${name}, Price: ${price}`);
    }
    return (
        <View style={styles.container}>
            <Text>Service name*</Text>
            <TextInput
                style={styles.input}
                placeholder="Input a service name"
                onChangeText={(text) => setName(text)}
            />
            <Text>Price*</Text>
            <TextInput
                style={styles.input}
                placeholder="Price"
                onChangeText={(text) => setPrice(text)}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleAddService}
            >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        padding: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: "black",
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#F2F2F7",
        borderRadius: 5,
        marginBottom: 10,
    },
        button: {
        backgroundColor: "#EF506B",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        borderRadius: 10,
        padding: 12,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 16,
    }
})
export default AddService;