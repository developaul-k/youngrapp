import React from 'react';
import {
    createStackNavigator,
} from 'react-navigation';
import {
    Button,
} from 'react-native';
import CameraScreen from '../screens/CameraScreen';

const CameraRoute = createStackNavigator({
    Camera: {
        screen: CameraScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Camera',
            headerLeft: (
            <Button
                title="Cancel"
                color="black"
                onPress={() => navigation.popToTop()}
            />
            ),
        })
    },
});

export default CameraRoute;