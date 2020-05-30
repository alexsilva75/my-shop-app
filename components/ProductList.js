import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import ProductItem from './ProductItem'

const ProductList = props => (
    <View style={styles.list}>
        <FlatList {...props}
            renderItem={(productItem) => (
                <ProductItem 
                    product={productItem.item}
                    onSelect={() => props.onSelectProduct(productItem.item)}
                />
            )}

            style={{ width: '100%' }}
            contentContainerStyle={{ alignItems: 'center' }}
        />
    </View>
)

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ProductList