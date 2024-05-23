import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Header = () =>{
    return (
        <View style={styles.containers}>
            <View style={styles.leftContainer}>
            <Text style={styles.title}>Explore</Text>
            </View>
            <View style={styles.rightContainer}>
                <Image source={require('../../assets/NasaLogo.png')} style={styles.image}>
                </Image>
                
            </View>
        </View>
    );
};

const styles =StyleSheet.create({
    containers:{
        flexDirection:'row',
        alignItems:'center',
    },
    leftContainer:{
        flex:1,
        alignItems:'flex-start'
    },
    rightContainer:{
        flex:1,
        alignItems:'flex-end'

    },
    title:{
        fontSize:20,
        color:'#ffffff',
    },
    image:{
        width:60,
        height:60,

    }
});
export default Header;