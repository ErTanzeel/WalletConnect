import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList,'Body'>



export default function Body({ navigation }: HomeProps) {


    const cardCollections = [
        {
            id: "1",
            image: require('./static/BIT.png'),
            name: "BTC",
            total: "4.485  BTC",
            balance: "97",
            balnceComma: "305",
            range: '+4.6%',
        },

        {
            id: "2",
            image: require('./static/ETH.png'),
            name: "ETH",
            total: "2.385  ETH",
            balance: "86",
            balnceComma: "405",
            range: '+5.6%',
        },

        {
            id: "3",
            image: require('./static/XRP.png'),

            name: "XRP",
            total: "5.485  XRP",
            balance: "95",
            balnceComma: "305",
            range: '-2.6%',
        },
        {
            id: "4",
            image: require('./static/LTH.png'),
            name: "LTH",
            total: "6.486  LTH",
            balance: "98",
            balnceComma: "304",
            range: '-3.6%',
        },



    ]

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text>Total balancess  <Image style={styles.imageBox} source={{ uri: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-eye-devices-flatart-icons-outline-flatarticons.png" }} />
                    </Text>

                    <Text style={styles.digitText}>$9,637.00</Text>
                </View>

                <View>
                    <Text style={styles.usdText}>USD <Image style={styles.imageBox} source={{ uri: "https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png" }} />
                    </Text>

                    <Text style={styles.numberText}> +$175(4.6%)</Text>
                </View>


            </View>

            {/* // Button part */}

            <View style={styles.buttonBox}>

                <TouchableOpacity>
                    <View style={styles.button1}>
                        <Text style={styles.button1Text}>
                            <Image
                                style={styles.arrowImg} // Use tintColor to change the image color to white
                                source={{ uri: "https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/external-down-arrow-arrows-dreamstale-lineal-dreamstale-3.png" }} // Update the URI to the white arrow image
                            />  Deposit
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                    <View style={styles.button2}>

                        <Text style={styles.button2Text}> <Image style={[styles.arrowImg, { tintColor: 'white' }]}
                            source={{ uri: "https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/external-up-arrow-arrows-dreamstale-lineal-dreamstale-4.png" }}
                        />  Withdraw</Text>
                    </View>
                </TouchableOpacity>

            </View>
            {/* Asset Part */}

            <View style={styles.assetContainer}>

                <Text style={styles.assetText} > My Assets </Text>

                <Image style={styles.searchImg} source={{ uri: "https://img.icons8.com/ios/50/search--v1.png" }} />


            </View>

            {/* Card PART */}

            <View style={styles.cardCollections}>

                {cardCollections.map((item, index) => {
                    return (
                        <>
                            <TouchableOpacity>
                                <View style={[styles.card, index < 2 ? styles.sameColorCard : styles.differentColorCard
                                ]}>
                                    <Image style={styles.coinImage}
                                        source={item.image} />

                                    <View>
                                        <Text style={styles.usdText}> {item.name} </Text>
                                        <Text >{item.total}</Text>
                                    </View>
                                    <View>
                                        <Text> Balance </Text>
                                        <Text style={styles.cardPrice}> $<Text style={{ fontWeight: "bold", color: "black" }}>{item.balance}</Text>,{item.balnceComma} </Text>
                                    </View>

                                    <Text style={[styles.coinPercent, index < 2 ? styles.rangeSameColor : styles.rangedifferentColor]}> {item.range}</Text>
                                </View>
                            </TouchableOpacity>
                        </>

                    )
                })}


            </View>


        </>

    )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 3
    },



    imageBox: {
        borderStartColor: "white",
        height: 18,
        width: 18,
        fontWeight: "500"
    },

    digitText: {
        marginTop: 3,
        fontWeight: "900",
        fontSize: 28,
        color: "black"
    },

    usdText: {
        fontWeight: "700",
        color: "black",
        fontSize: 20

    },
    numberText: {
        color: "green",
        marginTop: 3,
    },
    buttonBox: {
        marginTop: 25,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"


    },
    arrowImg: {
        height: 18,
        width: 18,
    },
    button1: {
        borderRadius: 7,
        height: 50,
        width: 120,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,  // Set border width to 2px
        borderStyle: 'solid',  // Set border style to solid
        borderColor: 'black'  // Set border color to red

    },

    button1Text: {
        color: "black",
        tintColor: "black",
        fontSize: 18
    },

    button2Text: {
        color: "white",
        tintColor: "white",
        fontSize: 18,

    },

    button2: {
        borderRadius: 7,
        height: 50,
        width: 120,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black'

    },
    assetContainer: {
        marginTop: 33,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    assetText: {
        fontWeight: "bold",
        color: "black",
        fontSize: 20,
        paddingRight: 65
    },
    searchImg: {
        height: 28,
        padding: 10,
        width: 28,
        marginRight: 50,
        backgroundColor: "white",
        color: "white",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "white",
        borderRadius: 5
    },
    cardCollections: {
        height: 300,
        // backgroundColor: "green",
        marginTop: 18,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",


    },
    card: {
        display: "flex",
        flexDirection: "row",
        height: 120,
        width: 150,
        flexWrap: "wrap",
        margin: 15,
        borderRadius: 25,
        padding: 10,
        backgroundColor: "#FAFAD2",

    },

    sameColorCard: {
        backgroundColor: "#FAFAD2",

    },

    rangeSameColor: {
        color: "green"

    },
    rangedifferentColor: {
        color: "red"

    },

    differentColorCard: {
        backgroundColor: "#E0FFFF"
    },

    coinImage: {
        height: 55,
        width: 55,
        marginRight: 6
    },

    cardPrice: {
        fontSize: 18
    },

    coinPercent: {
        color: "green",
        marginTop: 20,
        marginLeft: 7
    }


})