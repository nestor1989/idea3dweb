import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { Things } from "../interfaces/thingsInterface"
import { useNavigation } from "@react-navigation/native";

interface Props{
    thing: Things;
}

export const  ThingCard = ({thing}: Props) =>{
    const uri = `${thing.thumbnail}`;
    const navigation = useNavigation<any>();
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={ () => navigation.navigate('DetailsScreen', {thing: thing})}>
        <View style={{
            width:250,
            height:250,
            paddingHorizontal: 10,
            paddingVertical:10
        }}>
            
            <View style={styles.imageContainer}>
                <Image source={{uri: uri}}
                        style={styles.image}
                />
            </View>
        </View>
        </TouchableOpacity>
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