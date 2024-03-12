import {Image, Pressable, Text} from "react-native";

export function Product(props) {

    let ProductName = props.details.Name;
    let ProductImage = props.details.Picture;

    return (
        <Pressable>
            {
                ProductImage === '' ? (
                    <Image source={require('../../../assets/product-default.png')} style={{width: 160, height: 160, resizeMode: "contain"}} />
                ) : (
                    <Image source={{uri: ProductImage}} style={{width: 160, height: 160, resizeMode: "contain"}} />
                )
            }
            <Text style={{textAlign: "center", marginBottom: 15, marginTop: 10}}>
                {ProductName}
            </Text>
        </Pressable>
    )
}