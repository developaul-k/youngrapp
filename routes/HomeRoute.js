import React from 'react';
import { createStackNavigator } from 'react-navigation';
import FeedScreen from '../screens/FeedScreen';
import sharedRoute, { sharedOptions } from './sharedRoutes';
import { Image } from 'react-native';
import NavButton from '../components/NavButton';

const HomeRoute = createStackNavigator(
    {
        Home: {
            screen: FeedScreen,
            navigationOptions: ({navigation}) => ({
                headerTitle: (
                    <Image
                        source={require('../assets/images/logo.png')}
                        style={{ height: 35 }}
                        resizeMode={"contain"}
                    />
                ),
                headerLeft: (
                    <NavButton
                        iconFamily="Feather"
                        iconName={"camera"}
                        size={30}
                        color={"black"}
                        onPress={ () => navigation.navigate('TakePhoto')}
                    />
                )
            })
        },
        ...sharedRoute
    },
    {
        ...sharedOptions
    }
)

export default HomeRoute;