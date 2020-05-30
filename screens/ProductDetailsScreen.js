import React from 'react'
import {
    ScrollView,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

import DefaultText from '../components/DefaultText'

const ProductDetailsScreen = ({ navigation, route }) => {

    const { product } = route.params
    return (
        <ScrollView
            contentContainerStyle={{alignItems: 'center'}}
        >
            <View style={styles.detailsContainer}>
                <Image source={{ uri: product.imageUrl }} style={styles.image} />

                <View style={styles.textContainer} >
                    <View >
                        <DefaultText style={styles.title}>{product.title}</DefaultText>
                    </View>
                    <View>
                        <DefaultText>{product.price}</DefaultText>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <DefaultText>{product.description}</DefaultText>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        flex: 1,
        width: '95%',
        alignItems: 'center',
        padding: 10
    },
    descriptionContainer: {
        flex: 1
    },
    textContainer: {
       
        width: '100%',
        height: 70,    
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        justifyContent: 'space-around',
        textAlign: 'center'

    },
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },

})
export default ProductDetailsScreen