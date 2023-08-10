import { Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonInfo from "./ButtonInfo";

const dimensions = Dimensions.get('window');
const isSmallDevice = dimensions.width < 768
interface Props{
    onPress: () => void;
    title: string;
    info: string;
}

export const ModalContent = ({onPress, title, info}: Props) =>{
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
                    <Text style = {styles.textModal} >{title}</Text>
                    <Text style = {styles.subtitleMobile}>{info}</Text>
                    
                </View>



    );
}

const styles = StyleSheet.create({
    contModal:{
        backgroundColor:'rgba(255,255,255,0.7)',
        width:'40%',
        height:'70%',
        padding:10,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:25
      },
  
      contModalMobile:{
        width:'70%',
        height:'50%',
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
  
      textModal:{
        fontSize: 50,
        color: 'black'
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

      
    })