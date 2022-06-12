import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Linking, ScrollView, Dimensions, useWindowDimensions } from 'react-native';
import Verse from './components/verse';

function Bhagavad_Gita_Verses ({ navigation, route }) {
    let text;
    switch(route.params.chapter){
        case  "Chapter 1":
            text = "Lmao boomer"
            break;
        case "Chapter 6":
            text="ur on chap6"
            break;
        default:
            text="dev"

    }
    return (
        <Text>
        {text}

        </Text>
    )
}

export default Bhagavad_Gita_Verses;