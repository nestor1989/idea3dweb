import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Linking, ActivityIndicator, FlatList, Button} from 'react-native';
import { useThings } from '../hooks/useThings';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThingCard } from '../components/ThingCard';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview/web";
import MyButton from '../components/ButtonDownLoad';
import ButtonDownload from '../components/ButtonDownLoad';

export const HomeScreen = ()=>{

    const {thingsPopular, isLoading} = useThings();
    const {top} = useSafeAreaInsets();

    const dataProvider = new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(thingsPopular);
    const layoutProvider = new LayoutProvider(
      (index) => 0, // Tipo de diseño para el elemento en el índice dado
      (type, dim) => {
        dim.width = 250;
        dim.height = 290;
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
          style={{ flex: 1 }}
          dataProvider={dataProvider}
          layoutProvider={layoutProvider}
          rowRenderer={renderRow}
          isHorizontal={true}
          
          //onEndReachedThreshold={0.4}
        />

        
      </View>

    </View>
  );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      padding:20,
      width: '100%', 
      height: '100%',
    },

    recycler:{
      alignItems:'center',
      width: '100%', 
      height: 290,
      justifyContent:'center', 
      alignContent: 'center'
    },
  
    title: {
      flex:1,
      fontSize: 100,
      color: 'white'
    },

    callToActionCont:{
      flexDirection: 'row',
      flexWrap: 'wrap',
    }
  });