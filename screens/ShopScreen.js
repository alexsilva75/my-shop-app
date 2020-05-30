import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import { PRODUCTS } from '../data/dummy-data'
import ProductList from '../components/ProductList'


const ShopScreen = ({navigation}) => {

    const onSelectProductHandler = (product) =>{
        navigation.navigate('ProductDetails',
            {
                product
            }
        )
    }

    return (
        <View style={styles.screen}>
            <ProductList 
                data={PRODUCTS} 
                onSelectProduct={onSelectProductHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

})
export default ShopScreen