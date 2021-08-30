import { Typography, Link, makeStyles } from '@material-ui/core/';
import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

const useStyles = makeStyles((theme) => ({
    footer: {
        color: 'gray',
        backgroundColor: "#9FE6A0",
        padding: theme.spacing(2),
        textAlign: 'center',
        height: '4.5vh',
        fontSize: 23,
        fontFamily: 'monospace',


    },
}));
function Footer() {
    const classes = useStyles();
    return (
        <footer >
            <Typography className={classes.footer}>
                &copy;NoteApp.{''}{new Date().getFullYear()}
                {''}
            </Typography>
        </footer>
        // <View style={{ flex: 1 }}>
        //     {/* <View><Text>my text</Text></View> */}
        //     <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}><Text>My fixed footer</Text></View>
        // </View>
    );
}

export default Footer;


