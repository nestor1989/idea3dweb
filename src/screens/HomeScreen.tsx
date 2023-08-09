import {View, SafeAreaView, Text, StyleSheet, ActivityIndicator, Image, Dimensions, useWindowDimensions, Button, Modal, TouchableOpacity, Platform} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ButtonDownload from '../components/ButtonDownLoad';
import { useState } from 'react';
import { container } from 'webpack';
import ButtonInfo from '../components/ButtonInfo';
import LinearGradient from 'react-native-web-linear-gradient';
import ButtonDownloadUX from '../components/ButtonDownLoadUX';

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

              <View style={[styles.textCont, isSmallDevice && styles.textContMobile]}>
              <Text
              style = {[styles.title, isSmallDevice && styles.titleMobile]}
              >Soluciones{"\npara Makers"}</Text>

              <Text style = {[styles.subtitle, isSmallDevice && styles.subtitleMobile]}
              >Impresión 3D en la palma de tu mano
              </Text>

              </View>

              <View style={styles.contDownload}>
              <ButtonDownloadUX url='https://play.google.com/store/apps/details?id=com.idea3d.idea3d'/>
              </View>
            </View>

            <View style = {styles.recyclerManage}>

            <View style = {[styles.contImageLaunch, isSmallDevice && styles.contImageLaunchMob]}>
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
  
    customFont:{
      fontFamily: 'at_surt_bold'

    },
  
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
      justifyContent:'flex-end', 
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
      fontSize: 80,
      color: 'white',
      textAlign: 'justify',
      left: '10%',
      justifyContent:'flex-start',
      fontFamily: 'Roboto-Light.ttf' 
    },

    titleMobile: {
      flex:1,
      fontSize: 40,
      color: 'white',
      textAlign: 'justify',
      left: '12%',
      justifyContent:'center',
      fontFamily: 'at_surt_bold.otf'
    },

    subtitle: {
      flex:1,
      fontSize: 20,
      color: 'white',
      textAlign: 'justify',
      top:20,
      left: '10%',
      fontFamily: 'at_surt_light.otf' 
    },

    subtitleMobile: {
      flex:1,
      fontSize: 20,
      color: 'white',
      textAlign: 'justify',
      left: '12%', 
      justifyContent:'center',
      top:10,
      fontFamily: 'at_surt_light.otf'
    },

    callToActionCont:{
      flex:1,
      flexDirection: 'column',
      justifyContent:'space-evenly', 
      alignItems: 'flex-start',
      
      //backgroundColor:'red',
    },

    callToActionContMobile:{
      flex:1,
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'flex-start'
      //backgroundColor:'green',
    },

    textCont:{
      flex:1,
      alignContent:'flex-start',
      //backgroundColor:'green',
      justifyContent:'flex-start',
      alignItems:'flex-start',
      left:'5%'
    },

    textContMobile:{
      flex:1,
      alignContent:'center',
      //backgroundColor:'green',
      justifyContent:'center',
      left:'0%'
    },

    recyclerManage:{
      flex:1,
      flexDirection: 'row',
      //backgroundColor:'red',
    },

    image:{
      height: '40%',
      width: '35%',
      left: '7%',
      fill: 'white',
      tintColor:'white',
      justifyContent:'center'
    },

    imageMobile:{
      height: '75%',
      width: '100%',
      fill: 'white',
      tintColor:'white',
      left: '0%',
    },

    contDownload:{
      flex:1, 
      width: '100%',
      justifyContent:'center', 
      alignItems: 'center', 
      //backgroundColor:'blue'
    },

    
    contImageLaunch:{
      flex:1
    },

    contImageLaunchMob:{
      flex:1,
      alignContent:'center',
      //backgroundColor:'blue'
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