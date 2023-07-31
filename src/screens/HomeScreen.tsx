import {View, SafeAreaView, Text, StyleSheet, ActivityIndicator, Image, Dimensions, useWindowDimensions, Button} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ButtonDownload from '../components/ButtonDownLoad';
const dimensions = Dimensions.get('window');
const {height, width}=Dimensions.get('window')
const imageHeight = Math.round(dimensions.width * 1 / 16); //calculate with aspect ratio
const imageWidth = dimensions.width *0.1;
const appLaunchHeigth = Math.round(dimensions.width * 3 / 16);
const appLaunchWidth = dimensions.width *0.3;


export const HomeScreen = ()=>{

    const {top} = useSafeAreaInsets();

    const windowsArea = useWindowDimensions;


    return (
     
      <SafeAreaView style={styles.safeArea }> 
        
        <View style= {styles.containerExt}>
          
          <View style = {styles.containerTop}>
            <View style = {{flex:1}}>
              <Image source={require('../assets/logo_white.png')} style={styles.image} />
            </View>
            
            <View style = {styles.containerRight}>
              <Text style = {styles.we}>Nosotros</Text>
              <Text style = {styles.we}>Colaborar</Text>
              <Text style = {styles.we}>Contacto</Text>

            </View>

          </View>
        
          <View style={styles.container}>

            <View style = {styles.callToActionCont}>

              <Text
              style = {styles.title}
              >Descarga {"\nla APP"}</Text>

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
      //backgroundColor:'teal',
      flexDirection: 'row',
    },

    containerRight: {
      //flex:0.6,
      flexDirection: 'row',
      marginRight:'8%',
      marginVertical:20
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
      color: 'white'
    },

    we: {
      flex:1,
      fontSize: 20,
      margin:20,
      color: 'white',
      alignSelf: 'center',
      alignContent: 'flex-end'
    },

    callToActionCont:{
      flex:1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent:'center', 
      alignContent: 'center',
      marginBottom: 75
    },

    recyclerManage:{
      flex:1,
      flexDirection: 'row',
    },

    image:{
      height: imageHeight,
      width: imageWidth,
      fill: 'white',
      zIndex: 1,
      tintColor:'white',
      top:10,
      left:75,
    },

    imageLaunch:{
      height: 450,
      width:570,

    }
  });