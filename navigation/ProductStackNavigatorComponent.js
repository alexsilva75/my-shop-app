import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import Colors from '../constants/Colors'

import DrawerMenuButton from '../components/DrawerMenuButton'
import CustomHeaderButton from '../components/CustomHeaderButton'

import { defaultScreenOptions } from '../screens/config/DefaultScreenConfig'
import ShopScreen from '../screens/ShopScreen'
import CartScreen from '../screens/CartScreen'
import ProductDetailsScreen from '../screens/ProductDetailsScreen'

const ProductStack = createStackNavigator()

const ProductStackNavigatorComponent = (props) => (
    <ProductStack.Navigator screenOptions={
        defaultScreenOptions
    }>
        <ProductStack.Screen
            name='Shop'
            component={ShopScreen}

            options={({ navigation, route }) => ({
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item title='Cart' iconName='ios-cart'
                            onPress={() => navigation.navigate('Cart')} />
                    </HeaderButtons>
                ),
                headerLeft: () => <DrawerMenuButton navigation={navigation} />
            })
            }
        />

        <ProductStack.Screen
            name='Cart'
            component={CartScreen}
            options={({ navigation, route }) => ({
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item title='Go Back' iconName='ios-arrow-back' onPress={() => navigation.goBack()} />
                    </HeaderButtons>
                ),
            })}
        />

        <ProductStack.Screen
            name='ProductDetails'
            component={ProductDetailsScreen}
            options={({ navigation, route }) => ({
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item title='Go Back' iconName='ios-arrow-back' onPress={() => navigation.goBack()} />
                    </HeaderButtons>
                ),
            })}
        />
    </ProductStack.Navigator>
)

export default ProductStackNavigatorComponent