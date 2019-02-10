import React from 'react';
import {
    createMaterialTopTabNavigator,
    MaterialTopTabBar
} from 'react-navigation';
import {
    View
} from 'react-native';
import {
    Constants
} from 'expo';

import CameraRoute from '../routes/CameraRoute';
import LibraryRoute from '../routes/LibraryRoute';

const AddPhotoNavigation = createMaterialTopTabNavigator(
    {
        Camera: {
            screen: CameraRoute,
            navigationOptions: {
                title: 'Camera'
            }
        },
        Library: {
            screen: LibraryRoute,
            navigationOptions: {
                title: 'Library'
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: '#bbb',
            style: {
                borderWidth: 0,
                backgroundColor: '#fff'
            },
            tabStyle: {
                borderWidth: 0,
                backgroundColor: '#fff',
            },
            indicatorStyle: {
                borderWidth: 0
            },
            labelStyle: {
                borderWidth: 0
            }
        },
        tabBarComponent: props => {
            return (
                // Iphone X Supported
                <View
                    style={{
                        paddingBottom: Constants.statusBarHeight > 43 ? Constants.statusBarHeight : 0
                    }}
                >
                    <MaterialTopTabBar { ...props } />
                </View>
            )
        }
    }
)

export default AddPhotoNavigation;