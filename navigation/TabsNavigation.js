import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import HomeRoute from '../routes/HomeRoute';
import SearchRoute from '../routes/SearchRoute';
import NotificationsRoute from '../routes/NotificationsRoute';
import ProfileRoute from '../routes/ProfileRoute';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const TabsNavigation = createBottomTabNavigator(
    {
        Home: {
            screen: HomeRoute,
            navigationOptions: {
                tabBarIcon: ({focused}) => {
                    return  focused ? <MaterialIcons name="home" size={30} color="black" /> : <MaterialCommunityIcons name="home-outline" size={30} color="black" />
                }
            }
        },
        Search: {
            screen: SearchRoute,
            navigationOptions: {
                tabBarIcon: ({focused}) => {
                    return <Ionicons name={ focused ? "md-search" : "ios-search" } size={ focused ? 33 : 30} color="black" />
                }
            }
        },
        AddPhoto: {
            screen: () => null,
            navigationOptions: {
                tabBarIcon: ({focused}) => {
                    return <Ionicons name="ios-add-circle-outline" size={30} color="black" />
                },
                tabBarOnPress: ({navigation}) => {
                    navigation.navigate('TakePhoto')
                }
            }
        },
        Notifications: {
            screen: NotificationsRoute,
            navigationOptions: {
                tabBarIcon: ({focused}) => {
                    return <Ionicons name={ focused ? "ios-heart" : "ios-heart-empty" } size={30} color="black" />
                }
            }
        },
        Profile: {
            screen: ProfileRoute,
            navigationOptions: {
                tabBarIcon: ({focused}) => {
                    return <MaterialIcons name={ focused ? "person" : "person-outline" } size={30} color="black" />
                }
            }
        }
    },
    {
        // tabBarComponent: (props) => {
        //     const {
        //         jumpTo,
        //         navigation
        //     } = props;

        //     return <BottomTabBar
        //         {...props}
        //         jumpTo={routeName => {
        //             if (routeName === 'AddPhoto') {
        //                 navigation.navigate('TakePhoto');
        //                 console.log(1)
        //             } else {
        //                 jumpTo(routeName)
        //             }
        //         }}
        //     />
        // },
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: '#fbfbfb',
                height: 45
            }
        }
    }
)

export default TabsNavigation;

