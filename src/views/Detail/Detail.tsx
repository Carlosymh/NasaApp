import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../types";
import Header from "../../components/Header";



const Detail = () => {
    const {params:{title,date,url,explanation}} =useRoute<NativeStackScreenProps<RootStackParams, 'Detail'>['route']>();
    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <Image source={{uri:url}} style={styles.image}/>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <ScrollView style={styles.explaintContainer}>
                    <Text style={styles.explanation}>{explanation}</Text>
                </ScrollView>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
        backgroundColor:'#030F3D',
    },
    content:{
        backgroundColor:'#4156AB',
        borderRadius:10,
        marginVertical:24,
        padding:16,
    },
    image:{
        width:'100%',
        height:'50%',
        borderRadius:10,
        borderWidth:2,
        borderColor:"#34495E",
        resizeMode:"cover",
        marginBottom:16,
    },
    title:{
        color:'#fff',
        fontSize:24,
        fontWeight:'bold',
        marginBottom:5,
    },
    date:{
        color:'#ddd',
        fontSize:16,
        fontWeight:'bold',
        marginBottom:16,
    },
    explaintContainer:{
        flex:1,
        marginVertical:16,
    },
    explanation:{
        color:'#fff',
        fontSize:16,
    }

});

export default Detail;