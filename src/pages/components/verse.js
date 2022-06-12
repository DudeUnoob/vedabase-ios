import { ScrollView } from 'react-native-web';

import { StyleSheet, Text, View, Image, FlatList, Linking } from 'react-native';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import React from 'react';

export default class Verse extends React.Component {

    render() {
        const styles = StyleSheet.create({
            heading: {
                fontSize: 18,
                fontWeight: '600',
                marginBottom: 13,
            },
            card: {
                backgroundColor: 'white',
                borderRadius: 8,
                paddingVertical: 45,
                paddingHorizontal: 25,

                marginVertical: 10,

            },
            shadowProp: {
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
            },
            img: {
                width: 50,
                height: 50,
                padding: 3,
            },
            text: {
                textAlign: 'center'
            },
            translation: {
                textAlign: "center",
                fontStyle: "italic",
                marginTop: 15
            }
        });
        return (
            <>
            <View style={[styles.card, {backgroundColor:'#f0d1a2'}]}>
                <View>
                    <Text style={[styles.heading, styles.text]}>
                        {this.props.chapter}
                    </Text>
                </View>
                <Text style={styles.text}>
                    {this.props.sanskrit}
                </Text>
                <Text style={styles.translation}>
                    {this.props.englishVerse}
                </Text>
                <Text style={{ fontWeight: "bold", textAlign: "center", marginTop: 15 }}>
                    Synonyms
                </Text>
                <Text style={{ marginTop: 5 }}>
                    {this.props.synonyms}
                </Text>
                <Text style={{ fontWeight:"bold", textAlign:"center", marginTop:15}}>
                    Translation
                </Text>
                <Text>
                    {this.props.translation}
                </Text>
                <Text style={{ fontWeight: "bold", textAlign: "center", marginTop: 15 }}>
                    Purport
                </Text>
                <Text>
                    {this.props.purport}
                </Text>
                </View>
            </>
        )
    }
}
