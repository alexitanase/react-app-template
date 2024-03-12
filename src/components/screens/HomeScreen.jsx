import {SafeAreaView, ScrollView, View} from "react-native";
import {Header} from "../parts/Header";
import {StoreContext} from "../../context/StoreContext";
import {useContext, useEffect, useState} from "react";
import {Product} from "../elements/Product";

export function HomeScreen()
{
    const [products, setProducts] = useState([
        {
            Id: 0,
            Demo: true,
            Name: 'Product 1',
            Picture: '',
            Price: 0,
            MinPerSale: 0,
            MaxPerSale: 0
        },
        {
            Id: 0,
            Demo: true,
            Name: 'Product 2',
            Picture: '',
            Price: 0,
            MinPerSale: 0,
            MaxPerSale: 0
        },
        {
            Id: 0,
            Demo: true,
            Name: 'Product 3',
            Picture: '',
            Price: 0,
            MinPerSale: 0,
            MaxPerSale: 0
        },
        {
            Id: 0,
            Demo: true,
            Name: 'Product 4',
            Picture: '',
            Price: 0,
            MinPerSale: 0,
            MaxPerSale: 0
        }
    ]);
    const [page, setPage] = useState(1);
    const {makeRequest} = useContext(StoreContext);

    async function loadProducts() {

        let Data = {};
        Data['items'] = 12;
        Data['page']  = page;

        let response =  await makeRequest({
            resource: '/products',
            method: 'get',
            headers: {
                Entity: 1
            },
            data: Data
        });

        if(response.Error){

            return false;
        }

        if(page > 1){
            setProducts([
                ...products,
                ...response.Message
            ])
        }else{
            setProducts(response.Message)
        }

        return true;
    }

    useEffect(() => {

        loadProducts();

    }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{width: '100%'}}>
                <Header />
            </View>
            <ScrollView>
                <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", paddingBottom: 30}}>
                    {products.map((product, index) => (
                        <Product details={product} key={index} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}