import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Appbar, Title } from 'react-native-paper'
import colors from '../misc/colors';

function Header({ titleText }) {
    return (
        <div  >
            <Appbar.Header className='header11' style={styles.headerContainer} >
                <View style={styles.container}>
                    <Title style={styles.title}>{titleText}</Title>
                </View>
            </Appbar.Header>
        </div>)
}


const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#9FE6A0",
        // height: 4.3,



    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },


    title: {
        color: 'gray',
        fontSize: 30,
        fontFamily: 'monospace',
        fontWeight: 'bold',

    }

})

export default Header
