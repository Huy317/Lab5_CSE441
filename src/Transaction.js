import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const Transaction = () => {
    const [transactions, setTransactions] = useState([]);
    const fetchData = () => {
        axios.get("https://kami-backend-5rs0.onrender.com/transactions")
        .then((response) => {
            console.log("Transaction data fetched successfully:", response.data);
            // storage.set("transactions", JSON.stringify(response.data));
            setTransactions(response.data);
        }).catch((error) => {
            console.error("Error fetching transaction data:", error);
        });
    }

    useEffect(() => {
        console.log("Fetching transaction data...");
        fetchData();
    },[])

    const Item = ({transaction}) => {
        <TouchableOpacity>
            <Text>{transaction.id} - {transaction.createdAt}</Text>
        </TouchableOpacity>
    }

    return(
        <View style={styles.container}>

        </View>
    )
}

export default Transaction;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    
})