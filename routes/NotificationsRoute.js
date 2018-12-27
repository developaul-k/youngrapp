import { createStackNavigator } from 'react-navigation';
import NotificationsScreen from '../screens/NotificationsScreen';
import sharedRoute, { sharedOptions } from './sharedRoutes';

const NotificationsRoute = createStackNavigator(
    {
        Notifications: {
            screen: NotificationsScreen,
            navigationOptions: {
                headerTitle: "Notifications"
            }
        },
        ...sharedRoute
    },
    {
        ...sharedOptions
    }
)

export default NotificationsRoute;