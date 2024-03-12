import {Image, Platform, StyleSheet, Text, View} from "react-native";
import {useContext} from "react";
import {StoreContext} from "../../context/StoreContext";

export function Header() {

    let {storeDetails} = useContext(StoreContext);

    return (
        <View style={styles.topHeader}>
            {
                typeof storeDetails.Picture === 'undefined' || storeDetails.Picture === null || storeDetails.Picture === '' ? (
                    <Text style={styles.topHeaderLogoText}>{storeDetails.Name}</Text>
                ) : (
                    <Image source={{uri: storeDetails.Picture}} style={styles.topHeaderLogoImage} />
                )
            }
        </View>
    )

}

const styles = StyleSheet.create({
    topHeader: {
        marginTop:Platform.OS !== 'android' ? 0 : 30,
        backgroundColor:'#2a2a2a',
        padding:10,
        flexDirection:'row',
        alignItems: 'center'
    },
    topHeaderLogoText: {
        fontWeight: '300',
        fontSize: '26px',
        color: '#fff'
    },
    topHeaderLogoImage: {
        height: 28,
        width: 80,
        resizeMode: 'contain'
    }
});