import React from 'react';
import {
    createStackNavigator,
} from 'react-navigation';
import {
    Button,
} from 'react-native';
import LibraryScreen from '../screens/LibraryScreen';

const LibraryRoute = createStackNavigator({
    Library: {
        screen: LibraryScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Library',
            headerLeft: (
            <Button
                title="Cancel"
                color="black"
                onPress={() => navigation.popToTop()}
            />
            ),
        }),
    }
});

export default LibraryRoute