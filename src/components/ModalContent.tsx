import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
                    <Text style = {styles.textModal} >{title}</Text>
                    <Text style = {styles.subtitleMobile}>{info}</Text>
                    <TouchableOpacity style ={styles.button}>
                      <Button 
                          title= 'cerrar'
                          onPress={onPress}/>
                    </TouchableOpacity>
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
        borderRadius:20
      },
  
      contModalMobile:{
        width:'70%',
        height:'50%',
      },
  
      button: {
        width:150,
        height:20
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