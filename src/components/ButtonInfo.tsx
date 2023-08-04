import { Image, StyleSheet, TouchableOpacity } from "react-native";


interface Props{
    onPress: () => void;
    icon: any;
}

const ButtonInfo = ({onPress, icon}: Props)=>{
    return(
        <TouchableOpacity 
        style={styles.button} 
        onPress={onPress}
        activeOpacity={0.5}>

          <Image
            source={icon}
            style={styles.buttonImageIconStyle}
            />
      
    </TouchableOpacity>
    
    );
}

const styles = StyleSheet.create({
    button: {
      width:32,
      height:32,
      margin:'10%',
      color: 'white',
      alignSelf: 'center',
    },
    
    buttonImageIconStyle: {
      height: '100%',
      width: '100%',
      resizeMode: 'stretch',
      fill: 'white',
      zIndex: 1,
      tintColor:'white',
    },
  });
  
  export default ButtonInfo;


