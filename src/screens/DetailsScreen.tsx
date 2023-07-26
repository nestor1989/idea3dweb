import { StackScreenProps } from "@react-navigation/stack"
import { Text, View } from "react-native"
import { RootStackParams } from "../navigation/navigator"

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'>{};

export const DetailsScreen = ({navigation, route}: Props) =>{
    
    const {thing} = route.params;
    
    return(
        <Text>{thing.name} </Text>
        )
}