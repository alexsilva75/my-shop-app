import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from './CustomHeaderButton'

const HeaderBackButton = (props) => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Go Back' iconName='ios-arrow-back' onPress={() => props.navigation.goBack()} />
    </HeaderButtons>
)

export default HeaderBackButton