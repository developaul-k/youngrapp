import { createStackNavigator } from 'react-navigation';
import SearchScreen from '../screens/SearchScreen';
import sharedRoute, { sharedOptions } from './sharedRoutes';

const SearchRoute = createStackNavigator(
    {
        Search: {
            screen: SearchScreen
        },
        ...sharedRoute
    },
    {
        ...sharedOptions
    }
)

export default SearchRoute;