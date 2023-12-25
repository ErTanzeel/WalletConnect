import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const Header = () => {
    return (

        <View style={styles.container}>
            <Image style={styles.container1} source={{ uri: "https://img.icons8.com/fluency-systems-regular/48/diversity.png" }} />
            <Text style={styles.headingText}>My Wallet</Text>
            <Image style={styles.container1} source={{ uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" }} />
        </View>
    )
}
export default Header

const styles = StyleSheet.create({

    container: {
        height: 100,
        borderColor: "black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 21

    },
    container1: {
        height: 36,
        width: 31,
        borderRadius: 6,
        backgroundColor: "white"
    },
    headingText: {
        fontWeight: "bold",
        color: "black",
        fontSize: 20
    }
})