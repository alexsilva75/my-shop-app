import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from './CustomHeaderButton'

const DrawerMenuButton = (props) => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Menu' iconName='ios-menu'
            onPress={() => props.navigation.toggleDrawer()} />
    </HeaderButtons>
)

export default DrawerMenuButton