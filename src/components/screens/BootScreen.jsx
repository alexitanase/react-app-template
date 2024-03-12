import {StyleSheet, Text, View} from "react-native";

export function BootScreen()
{
    return (
        <View style={styles.container}>
            <Text>Still loading...</Text>
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