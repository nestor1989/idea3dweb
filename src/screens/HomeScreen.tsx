import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, ActivityIndicator, Image, Dimensions} from 'react-native';
import { useThings } from '../hooks/useThings';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThingCard } from '../components/ThingCard';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview/web";
import ButtonDownload from '../components/ButtonDownLoad';
import {SvgUri} from 'react-native-svg';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 1 / 16); //calculate with aspect ratio
const imageWidth = dimensions.width *0.1;

export const HomeScreen = ()=>{

    const {thingsPopular, isLoading} = useThings();
    const {top} = useSafeAreaInsets();

    const dataProvider = new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(thingsPopular);
    const layoutProvider = new LayoutProvider(
      (index) => 0, // Tipo de diseño para el elemento en el índice dado
      (type, dim) => {
        dim.width = 250;
        dim.height = 250;
      }
    );
    const renderRow = (type: string | number, data: any) => {
      // Aquí puedes renderizar cada elemento en la lista, similar al renderItem de FlatList
      return <ThingCard thing={data} />;
    };

    if (isLoading){
        return(
            <View style = {{flex:1, justifyContent:'center', alignContent: 'center'}}>
                <ActivityIndicator color='blue' size={100}/>
            </View>
        );
    }

    return (
        
     
      <SafeAreaView> 
        <View style= {styles.containerExt}>

          <Image source={require('../assets/logo_white.png')} style={styles.image} />
        
          <View style={styles.container}>

            <View style = {styles.callToActionCont}>

              <Text
              style = {styles.title}
              >Descarga {"\nla APP"}</Text>

              <ButtonDownload text='La quiero!' url='https://play.google.com/store/apps/details?id=com.idea3d.idea3d'/>
              
            </View>


            <View
            style = {styles.recycler}
            >
              <RecyclerListView
                //style={{ flex: 1 }}
                dataProvider={dataProvider}
                layoutProvider={layoutProvider}
                rowRenderer={renderRow}
                isHorizontal={false}
                
                //onEndReachedThreshold={0.4}
              />

              
            </View>

        </View>
      </View>
    </SafeAreaView> 
  );
}



const styles = StyleSheet.create({
    container: {
      flex:1,
      display: 'flex',
      //backgroundColor: '#000000',
      flexDirection: 'row',
      padding:10,
      width: '100%', 
      height: '100%',
      justifyContent:'center', 
      alignContent: 'center'
    },

    containerExt:{
      flex:1,
      flexDirection: 'column',
      backgroundColor: '#000000',
      padding:10,
      width: '100%', 
      height: '100%',
      justifyContent:'center', 
      alignContent: 'center'
    },

    recycler:{
      flex:1,
      alignItems:'center',
      width: '50%', 
      height: '100%',
      justifyContent:'center', 
      alignContent: 'center'
    },
  
    title: {
      flex:1,
      fontSize: 100,
      color: 'white'
    },

    callToActionCont:{
      flex:1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent:'center', 
      alignContent: 'center'
    },

    image:{
      height: imageHeight,
      width: imageWidth,
      fill: 'white',
      zIndex: 1,
      tintColor:'white',
      top:10,
      left:75,
    }
  });