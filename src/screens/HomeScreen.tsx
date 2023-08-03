import {View, SafeAreaView, Text, StyleSheet, ActivityIndicator, Image, Dimensions, useWindowDimensions, Button, Modal, TouchableOpacity, Platform} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ButtonDownload from '../components/ButtonDownLoad';
import { useState } from 'react';
import { container } from 'webpack';
import ButtonInfo from '../components/ButtonInfo';

const dimensions = Dimensions.get('window');
const {height, width}=Dimensions.get('window')
const imageHeight = Math.round(dimensions.width * 1 / 16); //calculate with aspect ratio
const imageWidth = dimensions.width *0.2;
//const appLaunchHeigth = Math.round(dimensions.width * 3 / 16);
const appLaunchWidth = dimensions.width *0.3;


export const HomeScreen = ()=>{

    const {top} = useSafeAreaInsets();

    const windowsArea = useWindowDimensions;

    const [isVisible, setIsVisible] = useState(false);

    const [modalText, setModalText] = useState('ksksks');

    const touchInfo = (text: string) =>{
      setIsVisible(true);
      setModalText(text);
    }

    return (
     
      <SafeAreaView style={styles.safeArea }> 

        <View style = {styles.modalExt}>

        <Modal  animationType="slide" 
                visible={isVisible}
                transparent={true}
                >

            <View style={styles.containerModal}> 
                
                <View style = {styles.contModal}>
                    <Text style = {styles.textModal} >{modalText}</Text>
                    <TouchableOpacity style ={styles.button}>
                      <Button 
                          title= 'cerrar'
                          onPress={()=> setIsVisible(false)}/>
                    </TouchableOpacity>
                </View>

            </View>
            
        </Modal>

        </View>
        
        <View style= {styles.containerExt}>
          
          <View style = {styles.containerTop}>
            
            <View style = {styles.containerLeft}>
              <Image source={require('../assets/logo-largo-removebg-preview.png')} style={styles.image} />
            </View>
            
            <View style = {styles.containerRight}>
              <ButtonInfo onPress={()=>touchInfo('nosotroo')} icon={require('../assets/cubo.png')}/>
              <ButtonInfo onPress={()=>touchInfo('colabora gato')} icon={require('../assets/corazon.png')}/>
              <ButtonInfo onPress={()=>touchInfo('send me an emaalala')} icon={require('../assets/avion-de-papel.png')}/>

            </View>

          </View>
        
          <View style={styles.container}>

            <View style = {styles.callToActionCont}>

              <Text
              style = {styles.title}
              >Imprime tus{"\nSUEÑOS"}</Text>

              <ButtonDownload url='https://play.google.com/store/apps/details?id=com.idea3d.idea3d'/>
              
            </View>

            <View style = {styles.recyclerManage}>

            <View style = {{flex:1}}>
              <Image source={require('../assets/movil-dual-removebg.png')} style = {styles.imageLaunch} />
            </View>
              
            </View>

        </View>
      </View>
    </SafeAreaView> 
  );
}



const styles = StyleSheet.create({
  
    safeArea: {
      flex: 1, 
      backgroundColor: '#000000',
      height: height,
      width: width
    },  

    containerExt:{
      flex:1,
      flexDirection: 'column',
    },
  
    container: {
      flex:5,
      flexDirection: 'row',
    },

    containerTop: {
      flex:1,
      backgroundColor:'blue',
      flexDirection: 'row',
    },

    containerRight: {
      flex:1,
      backgroundColor:'teal',
      flexDirection: 'row',
      alignItems:'flex-end',
      justifyContent:'center', 
    },

    containerLeft:{
      flex:1,
      backgroundColor:'yellow',
      alignItems:'flex-start',
      justifyContent:'center',
    },

    recycler:{
      flex:1,
      alignItems:'center',
      width: '100%', 
      height: '100%',
    },
  
    title: {
      flex:1,
      fontSize: 100,
      color: 'white',
    },

    callToActionCont:{
      flex:1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent:'center', 
      alignItems: 'center',
      backgroundColor:'green',
    },

    recyclerManage:{
      flex:1,
      flexDirection: 'row',
      backgroundColor:'red',
    },

    image:{
      height: '100%',
      width: '75%',
      fill: 'white',
      tintColor:'white',
    },

    imageLaunch:{
      height: '90%',
      width:'100%',
    },

    containerModal:{
    flex:1, 
    backgroundColor:'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems:'center'
    },

    contModal:{
      backgroundColor:'white',
      width:200,
      height:200,
      justifyContent: 'center',
      alignItems:'center',
      borderRadius:20
    },

    button: {
      width:150,
      height:20
    },

    textModal:{
      fontSize: 50,
      color: 'black'
    },

    modalExt:{
      justifyContent: 'center',
      alignItems:'center'
      
    }

  });