import { createStackNavigator } from 'react-navigation';
import ProfileScreen from '../screens/ProfileScreen';
import sharedRoute, { sharedOptions } from './sharedRoutes';

const ProfileRoute = createStackNavigator(
    {
        Profile: {
            screen: ProfileScreen,
            navigationOptions: ({screenProps}) => ({
                headerTitle: screenProps.username
            })
        },
        ...sharedRoute
    },
    {
        ...sharedOptions
    }
)

export default ProfileRoute;