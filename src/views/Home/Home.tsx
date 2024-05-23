import React, { useEffect, useState } from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../components/Header';
import fetchApi from '../../utils/fetch';
import TodaysImage from '../../components/TodaysImage';
import { PostImage } from '../../types';
import { sub, format } from 'date-fns';
import LastFiveDaysImages from '../../components/LastFiveDaysImages';

const Home = () =>{
    const [ todaysImage, setTodaysImage] = useState<PostImage>();
    const [ lastFiveDaysImages,setLastFiveDaysImages] = useState<PostImage[]>([]);
    useEffect(()=>{
        const loadTodaysImage=async ()=>{
            try {
                const todaysImageResponse = await fetchApi('&thumbs=true');
                setTodaysImage(todaysImageResponse);
            } catch (error) {
                console.error(error);
                setTodaysImage({});
            }
        };

        const loadLast5DaysImages= async ()=>{
            try {
                const date = new Date();
                const todaysDate = format(date,'yyyy-MM-dd');
                const yesterdayDate = format(sub(date,{days:1}),'yyyy-MM-dd');
                const fiveDaysAgoDate = format(sub(date,{days:6}),'yyyy-MM-dd');
                const lastFiveDaysImagesResponse = await fetchApi(`&thumbs=true&start_date=${fiveDaysAgoDate}&end_date=${yesterdayDate}`);
                setLastFiveDaysImages(lastFiveDaysImagesResponse);
            } catch (error) {
                console.error(error);
                setLastFiveDaysImages([]);
            }
        };
        loadLast5DaysImages();
        loadTodaysImage().catch(null);
    },[]);
    return (
        <View style={styles.containerView}>
            <Header/>
            <TodaysImage  {...todaysImage}/>
            <LastFiveDaysImages  postImages={lastFiveDaysImages}/>
        </View>
    );
};

const styles = StyleSheet.create({
    containerView:{
        flex:1,
        paddingHorizontal:16,
        backgroundColor:'#030F3D',
    }
});

export default Home;