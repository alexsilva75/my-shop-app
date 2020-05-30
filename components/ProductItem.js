import React from 'react'
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const ProductItem = props => (
    <View style={styles.productItem}>
        <TouchableOpacity onPress={props.onSelect}>
            <View>
                <View style={{ ...styles.productRow, ...styles.productHeader }}>
                    <ImageBackground source={{ uri: props.product.imageUrl }}
                        style={styles.bgImage}>
                        <View>

                        </View>
                    </ImageBackground>
                </View>
                <View style={{...styles.productRow, ...styles.productDetails}}>
                    <Text>{props.product.title}</Text>
                    <Text>{props.product.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
)


const styles = StyleSheet.create({
    productRow: {
        flexDirection: 'row'
    },
    productItem: {
        height: 200,
        width: '95%',
        backgroundColor: '#ddd'
        , marginTop: 10,
        borderRadius: 10,
        overflow: 'hidden'

    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',

    },
    productHeader: {
        height: '85%'
    },

    productDetails: {
        height: '15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})

export default ProductItem