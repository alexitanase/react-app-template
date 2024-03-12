import {createContext, useEffect, useState} from "react";
import {StyleSheet, View, Text} from "react-native";
import {ErrorScreen} from "../components/screens/ErrorScreen";
import {BootScreen} from "../components/screens/BootScreen";

const apiPath = 'http://192.168.1.136/api';

function makeRequest({resource, method, headers, data}){

    let query_params = '';
    let body;
    if(method.toUpperCase() === 'GET'){
        query_params = '?' + new URLSearchParams(data)
    }else{
        body = data;
    }

    return fetch(apiPath+resource+query_params, {
        method: method,
        headers: headers,
        body: body
    }).then(response => response.json());
}

export const StoreContext = createContext();

async function getStoreDetails(){
    return await makeRequest({
        resource: '/details',
        method: 'get',
        headers: {
            Entity: 1
        }
    })
}

export function StoreContextProvider(props){

    const [ errorStore, setErrorStore ] = useState("");
    const [ storeDetails, setStoreDetails ] = useState({
        Name: '',
        Description: '',
        Picture: '',
        Currency: {
            Name: '',
            Code: '',
            Decimal: 2
        },
        ReserveStock: false
    });

    useEffect(() => {
        getStoreDetails()
            .then(details => {

                if(details.Error){
                    setErrorStore(details.Message);
                    return;
                }

                setStoreDetails({
                    Name: details.Message?.Name,
                    Description: details.Message?.Description,
                    Picture: details.Message?.Picture,
                    ReserveStock: details.Message?.ReserveStock,
                    Currency: details.Message?.Currency,
                });

            })
            .catch(error => {
                setErrorStore(error.message);
            });

    }, []);

    if (errorStore !== ""){
        return (
            <ErrorScreen message={errorStore} />
        );
    }

    if (storeDetails.Name === '' || typeof storeDetails.Name === undefined) {
        return (
            <BootScreen />
        );
    }

    return (
        <StoreContext.Provider value={{storeDetails, makeRequest}}>
            {props.children}
        </StoreContext.Provider>
    )
}