import {View, SafeAreaView, Text, StyleSheet, ActivityIndicator, Image, Dimensions, useWindowDimensions, Button, Modal, TouchableOpacity, Platform} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useState } from 'react';
import ButtonInfo from '../components/ButtonInfo';
import LinearGradient from 'react-native-web-linear-gradient';
import ButtonDownloadUX from '../components/ButtonDownLoadUX';
import { ModalContent } from '../components/ModalContent';

const dimensions = Dimensions.get('window');
const {height, width}=Dimensions.get('window')

const isSmallDevice = dimensions.width < 768

export const HomeScreen = ()=>{

    const {top} = useSafeAreaInsets();

    const windowsArea = useWindowDimensions;

    const [isVisible, setIsVisible] = useState(false);

    const [modalTitle, setModalTitle] = useState('') 
    const [modalText, setModalText] = useState('');

    const touchInfo = (title: string, text: string) =>{
      setModalTitle(title);
      setModalText(text);
      setIsVisible(true);
    }

    
    const modalTitle1= 'Quienes somos';
    const modalInfo1 = 'somos nosotros';
  
    const modalTitle2 = 'Colabora con Idea 3D';
    const modalInfo2 = 'un pesito pa la birra';  
  
    const modalTitle3= 'Contactanos';
    const modalInfo3 = 'mandame un poema ksqjswkljsklqjsqs \nsksjksjsjsjsssjsksqnslnqlsmssjsjsjsjsjsjsj\nsssssssssssssssssssssssssssssssssssssssssssssssssssssssssss';
      
  
    return (
        
      <SafeAreaView style={styles.safeArea }> 

        <LinearGradient colors={['#040404', '#001933']} angle={90} style={styles.linearGradient}>
        <View style = {styles.modalExt}>

        <Modal  animationType="slide" 
                visible={isVisible}
                transparent={true}
                >

            <View style={styles.containerModal}> 

            <ModalContent onPress={()=> setIsVisible(false)}
                          title = {modalTitle}
                          info  = {modalText}/>
  
            </View>
            
        </Modal>

        </View>
        
        <View style= {styles.containerExt}>
          
          <View style = {styles.containerTop}>
            
            <View style = {styles.containerLeft}>
              <Image source={require('../assets/logo-largo-removebg-preview.png')} style={[styles.image, isSmallDevice && styles.imageMobile]} />
            </View>
            
            <View style = {styles.containerRight}>
              <ButtonInfo onPress={()=>touchInfo(modalTitle1, modalInfo1)} icon={require('../assets/cubo.png')}/>
              <ButtonInfo onPress={()=>touchInfo(modalTitle2, modalInfo2)} icon={require('../assets/corazon.png')}/>
              <ButtonInfo onPress={()=>touchInfo(modalTitle3, modalInfo3)} icon={require('../assets/avion-de-papel.png')}/>

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