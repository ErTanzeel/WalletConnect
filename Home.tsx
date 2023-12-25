import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './src/Header'
import Body from './src/Body'
import Footer from './src/Footer'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

type HomeProps = NativeStackScreenProps<RootStackParamList>
const Home = ({navigation}:HomeProps) => {
    
    return (
        <View>
            <Header />
            <Body />
            <Footer />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})