import { Image, StyleSheet, View } from "react-native"
import { Things } from "../interfaces/thingsInterface"

interface Props{
    thing: Things;
}

export const  ThingCard = ({thing}: Props) =>{
    const uri = `${thing.thumbnail}`;
    return (
        <View style={{
            width:250,
            height:250,
            paddingHorizontal: 10,
            paddingTop: 20,
            paddingBottom: 20,
        }}>
            
            <View style={styles.imageContainer}>
                <Image source={{uri: uri}}
                        style={styles.image}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        flex:1,
        borderRadius:18
    },
    imageContainer:{
        borderRadius:18,
        backgroundColor:'null',
        flex:1,
        shadowColor: "#FFF",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation:2
    }
    
});