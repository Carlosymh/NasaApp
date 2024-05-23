import React, { FC } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { PostImage, RootStackParams } from "../../types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, "Detail">
const TodaysImage:FC<PostImage> = ({date,explanation, url, title, hdurl}) =>{
    const {navigate}=useNavigation<PostImageNavigationProps>();
    const handleViewPress=() =>{
        navigate('Detail',{title,date,url,explanation});
    };
    return(
        <View style={styles.container}>
            <Image source={{uri:hdurl || url  }} style={styles.image}/> 
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title="View" onPress={handleViewPress}/>
            </View>
        </View>
    );
};

const  styles = StyleSheet.create({
    container:{
        backgroundColor:'#4156AB',
        marginVertical:16,
        borderRadius:10,
        padding:16,
        marginHorizontal:20,
    },
    image:{
        width:"100%",
        height:190,
        borderRadius:10,
        borderWidth:2,
        borderColor:"#34495E",
        resizeMode:"cover"
    },
    title:{
        color:"#fff",
        fontSize:20,
        marginTop:12,
        marginBottom:6,
        fontWeight:"bold",
        textAlign:"left",
    },
    date:{
        color:"#ddd",
        fontSize:16,
        textAlign:"left",
        marginBottom:12,
    },
    buttonContainer:{
        alignItems:"flex-end",
    }
});

export default TodaysImage;