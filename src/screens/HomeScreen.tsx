import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import { useThings } from '../hooks/useThings';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThingCard } from '../components/ThingCard';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview/web";

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

      <View
      style = {{
          alignItems:'center',
          width: '100%', 
          height: 290
      }
      }
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
      backgroundColor: '#C3E8BD',
      paddingTop: 40,
      paddingHorizontal: 10,
      width: '100%', 
      height: '100%',
      justifyContent:'flex-end', 
      alignContent: 'flex-end'
    },
    button: {
      backgroundColor: '#ADBDFF',
      padding: 5,
      marginVertical: 20,
      alignSelf: 'flex-start',
    },
    title: {
      fontSize: 40,
    },
  });