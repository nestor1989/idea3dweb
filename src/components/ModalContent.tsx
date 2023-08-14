import { Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonInfo from "./ButtonInfo";
import ButtonDownloadUX from "./ButtonDownLoadUX";
import ButtonSponsor from "./ButtonSponsor";

const dimensions = Dimensions.get('window');
const isSmallDevice = dimensions.width < 768
interface Props{
    onPress: () => void;
    title: string;
    info: string;
    isVisible? : boolean;
}

export const ModalContent = ({onPress, title, info, isVisible}: Props) =>{
    return(
        <View style = {[styles.contModal, isSmallDevice && styles.contModalMobile]}>
                    
            <TouchableOpacity 
                style ={styles.buttonClose}
                onPress={onPress}
                activeOpacity={0.5}>
              <Image 
                  source= {require('../assets/cruz.png')}
                  style = {styles.buttonImageIconStyle}
                  />
            </TouchableOpacity>
            <Text style = {styles.titleModal} >{title}</Text>
            <Text style = {styles.subtitleMobile}>{info}</Text>
            <View style={styles.contDownload}>
            {isVisible ? <ButtonSponsor url='https://paypal.me/nestordelrio?country.x=AR&locale.x=es_XC'/> : null}  
              </View>
                    
        </View>



    );
}

const styles = StyleSheet.create({
    contModal:{
        backgroundColor:'rgba(255,255,255,0.7)',
        width:'30%',
        padding:10,
        alignItems:'center',
        borderRadius:25
      },
  
      contModalMobile:{
        width:'70%',
      },
  
      button: {
        width:150,
        height:20
      },

      buttonClose:{
        width:16,
        height:16,
        alignSelf: 'flex-end',
        margin: '3%',
      },

      buttonImageIconStyle: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        fill: 'white',
        zIndex: 1,
        tintColor:'white',
      },
  
      titleModal:{
        fontSize: 25,
        color: '#00EDCB',
        alignSelf: 'flex-start',
        marginLeft:15
      },

      subtitleMobile: {
        fontSize: 15,
        color: 'white',
        textAlign: 'justify',
        margin: 15,
        fontFamily: 'at_surt_light.otf'
      },

      contDownload:{
        //flex:1, 
        width: '100%',
        justifyContent:'flex-end', 
        alignItems: 'flex-end', 
        marginRight: 15,
        marginBottom: 15
        //backgroundColor:'blue'
      },

      
    })