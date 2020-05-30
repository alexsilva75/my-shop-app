import 'react-native-gesture-handler'
import React from 'react'
import { Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import CustomHeaderButton from '../components/CustomHeaderButton'
import DrawerMenuButton from '../components/DrawerMenuButton'


import Colors from '../constants/Colors'

import ShopScreen from '../screens/ShopScreen'
import CartScreen from '../screens/CartScreen'
import OrdersScreen from '../screens/OrdersScreen'
import ManageProductsScreen from '../screens/ManageProductsScreen'
import EditProductScreen from '../screens/EditProductScreen'

import {defaultScreenOptions} from '../screens/config/DefaultScreenConfig'

import ProductStackNavigatorComponent from './ProductStackNavigatorComponent'

import HeaderBackButton from '../components/HeaderBackButton'

const OrdersStack = createStackNavigator()

const OrdersStackComponent = () => (
    <OrdersStack.Navigator screenOptions={
        defaultScreenOptions
    }>
        <OrdersStack.Screen
            name='Orders'
            component={OrdersScreen}
            options={({ navigation, options }) => ({
                headerLeft: () => <DrawerMenuButton navigation={navigation} />

            })} />
    </OrdersStack.Navigator>
)

const ManageProductsStack = createStackNavigator()

const ManageProductsStackComponent = () => (
    <ManageProductsStack.Navigator
        screenOptions={
            defaultScreenOptions
        } >
        <ManageProductsStack.Screen
            name='ManageProducts'
            component={ManageProductsScreen}
            options={({ navigation, options }) => (
                {
                    title: 'Manage Products',
                    headerLeft: () => <DrawerMenuButton navigation={navigation} />,
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                            <Item title='EditProduct' iconName='ios-add'
                                onPress={() => navigation.navigate('EditProduct')} />
                        </HeaderButtons>
                    )
                }
            )}
        />

        <ManageProductsStack.Screen
            name='EditProduct'
            component={EditProductScreen}
            options={({ navigation, route }) => (
                {
                    title: 'Edit Product',
                    headerLeft: () => <HeaderBackButton navigation={navigation} />
                }
            )
            }
        />


    </ManageProductsStack.Navigator>
)

const ProductDrawer = createDrawerNavigator()

const ProductDrawerNavigator = () => (
    <ProductDrawer.Navigator screenOptions={
        defaultScreenOptions
    }>
        <ProductDrawer.Screen name='ProductShop'
            component={ProductStackNavigatorComponent}
            options={{
                title: 'Shop'
            }} />

        <ProductDrawer.Screen name='Orders'
            component={OrdersStackComponent}
            options={({ navigation, route }) => (
                {
                    title: 'Orders',

                }
            )

            } />
        <ProductDrawer.Screen name='ManageProducts'
            component={ManageProductsStackComponent}
            options={({ navigation, route }) => (
                {
                    title: 'Manage Products'
                }
            )

            } />

    </ProductDrawer.Navigator>
)

const ProductNavigator = (props) => (
    <NavigationContainer >
        <ProductDrawerNavigator />
    </NavigationContainer>
)


export default ProductNavigator
