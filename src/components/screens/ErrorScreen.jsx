import {StyleSheet, Text, View} from "react-native";

export function ErrorScreen(props)
{
    let errorMessage = 'Undefined error.';
    if(typeof props.message !== 'undefined') errorMessage = props.message;

    return (
        <View style={styles.container}>
            <Text>{errorMessage}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});