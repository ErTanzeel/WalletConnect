import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Footer = () => {
    return (

        <View style={styles.footerContainer}>

            <Image style={styles.footerImg} source={{ uri: "https://img.icons8.com/ios/50/online-payment-.png" }} />
            <Image style={styles.footerImg} source={{ uri: "https://img.icons8.com/emoji/48/shopping-cart-emoji.png" }} />
            <Image style={styles.footerImg} source={{ uri: "https://img.icons8.com/ios/50/bullish--v1.png" }} />
            <Image style={styles.footerImg} source={{ uri: "https://img.icons8.com/ios/50/medical-insurance--v1.png" }} />

            <Image style={styles.footerImg} source={{ uri: "https://img.icons8.com/ios/50/gender-neutral-user--v1.png" }} />


        </View>
    )
}

export default Footer

const styles = StyleSheet.create({

    footerContainer: {
        marginTop: 18,
        height: 60,
        // backgroundColor: "yellow",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 10

    },
    footerImg: {
        height: 30,
        width: 30
    }
})