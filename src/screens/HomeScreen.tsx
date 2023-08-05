import {View, SafeAreaView, Text, StyleSheet, ActivityIndicator, Image, Dimensions, useWindowDimensions, Button, Modal, TouchableOpacity, Platform} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ButtonDownload from '../components/ButtonDownLoad';
import { useState } from 'react';
import { container } from 'webpack';
import ButtonInfo from '../components/ButtonInfo';
import LinearGradient from 'react-native-web-linear-gradient';

const dimensions = Dimensions.get('window');
const {height, width}=Dimensions.get('window')
const imageHeight = Math.round(dimensions.width * 1 / 16); //calculate with aspect ratio
const imageWidth = dimensions.width *0.2;
//const appLaunchHeigth = Math.round(dimensions.width * 3 / 16);
const appLaunchWidth = dimensions.width *0.3;

const isSmallDevice = dimensions.width < 768

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

        <LinearGradient colors={['#040404', '#001933']} angle={90} style={styles.linearGradient}>
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
              <Image source={require('../assets/logo-largo-removebg-preview.png')} style={[styles.image, isSmallDevice && styles.imageMobile]} />
            </View>
            
            <View style = {styles.containerRight}>
              <ButtonInfo onPress={()=>touchInfo('nosotroo')} icon={require('../assets/cubo.png')}/>
              <ButtonInfo onPress={()=>touchInfo('colabora gato')} icon={require('../assets/corazon.png')}/>
              <ButtonInfo onPress={()=>touchInfo('send me an emaalala')} icon={require('../assets/avion-de-papel.png')}/>

            </View>

          </View>
        
          <View style={[styles.container, isSmallDevice && styles.containerMobile]}>

            <View style = {[styles.callToActionCont, isSmallDevice && styles.callToActionContMobile ]}>

              <Text
              style = {[styles.title, isSmallDevice && styles.titleMobile]}
              >Soluciones{"\npara Makers"}</Text>

              <ButtonDownload url='https://play.google.com/store/apps/details?id=com.idea3d.idea3d'/>
              
            </View>

            <View style = {styles.recyclerManage}>

            <View style = {{flex:1}}>
              <Image source={require('../assets/movil-dual-removebg.png')} style = {styles.imageLaunch} />
            </View>
              
            </View>

        </View>
      </View>
      </LinearGradient>
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
    
    linearGradient: {
      flex: 1,
    },

    containerExt:{
      flex:1,
      flexDirection: 'column',
    },
  
    container: {
      flex:5,
      flexDirection: 'row',
    },

    containerMobile: {
      flex:5,
      flexDirection: 'column-reverse',
    },

    containerTop: {
      flex:1,
      //backgroundColor:'blue',
      flexDirection: 'row',
    },

    containerRight: {
      flex:1,
      //backgroundColor:'teal',
      flexDirection: 'row',
      alignItems:'flex-end',
      justifyContent:'center', 
    },

    containeRightMobile:{
      flex:1,
      //backgroundColor:'green',
      flexDirection: 'row',
      alignItems:'flex-end',
      justifyContent:'center', 
    },

    containerLeft:{
      flex:1,
      //backgroundColor:'yellow',
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

    titleMobile: {
      flex:1,
      fontSize: 50,
      color: 'white',
    },

    callToActionCont:{
      flex:1,
      flexDirection: 'column',
      //flexWrap: 'wrap',
      
      justifyContent:'space-evenly', 
      alignItems: 'center',
      //backgroundColor:'green',
    },

    callToActionContMobile:{
      flex:0.7,
      flexDirection: 'column',
      justifyContent:'center', 
      
      //backgroundColor:'green',
    },

    recyclerManage:{
      flex:1,
      flexDirection: 'row',
      //backgroundColor:'red',
    },

    image:{
      height: '80%',
      width: '70%',
      fill: 'white',
      tintColor:'white',
      justifyContent:'center'
    },

    imageMobile:{
      height: '75%',
      width: '100%',
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