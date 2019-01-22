import React from 'react';
import { createMaterialTopTabNavigator, SafeAreaView } from 'react-navigation';
import { Dimensions } from 'react-native';
import CameraScreen from '../screens/CameraScreen';
import LibraryScreen from '../screens/LibraryScreen';
import { MaterialTopTabBar } from 'react-navigation-tabs';

const { width, height } = Dimensions.get('window');

function MaterialTopTabBarWithStatusBar(props) {
    return (
    <SafeAreaView>
        <MaterialTopTabBar {...props} jumpToIndex={() => {}} />
    </SafeAreaView>
    );
}

const AddPhotoNavigation = createMaterialTopTabNavigator(
    {
        Camera: {
            screen: CameraScreen,
            navigationOptions: {
                tabBarLabel: 'Camera'
            }
        },
        Library: {
            screen: LibraryScreen,
            navigationOptions: {
                tabBarLabel: 'Library'
            }
        }
    },
    {
        initialRouteName: 'Library',
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled:true,
        tabBarComponent: MaterialTopTabBarWithStatusBar,
        tabBarOptions: {
            showLabel: true,
            upperCaseLabel: true,
            activeTintColor: 'black',
            inactiveTintColor: '#bbb',
            style: {
                backgroundColor: 'white'
            },
            tabStyle: {
                alignItems: 'center',
            },
            indicatorStyle: {
                display: 'none'
            },
            labelStyle: {
                fontSize: 14,
                fontWeight: '600'
            },
            showIcon: false
        }
    }
)

export default AddPhotoNavigation;