import React, { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { PostImage as PostImageTypes, RootStackParams} from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, "Detail">

const PostImage:FC<PostImageTypes>=({title,date,url,explanation})=>{
    const {navigate}=useNavigation<PostImageNavigationProps>();
    const handleViewPress=() =>{
    navigate('Detail',{title,date,url,explanation});
};
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonontainer}>
                <Button title='View' onPress={handleViewPress}/>
            </View>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        backgroundColor:'rgba(18,39,113,255)',
        borderRadius:10,
        marginBottom:15,
        padding:16,
    },
    title:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
        marginBottom:5
    },
    date:{
        color:'#ddd',
        fontSize:13,
        fontWeight:'bold',
        marginBottom:10
    },
    buttonontainer:{
        alignItems:'flex-end',
    }

});

export default PostImage