import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DeckList from './DeckList';
import AddDeck from './AddDeck';
import DeckView from './DeckView';
import NewCard from './NewCard';
import Quiz from './Quiz';


const Tabs = createBottomTabNavigator({
    Home: {
        screen: DeckList,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: 'Deck List'
        })
    },
    NewDeck: {
        screen: AddDeck,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: 'Add Deck'
        })
    }
}, {
    navigationOptions: {
        header: null
    }
});

const MainNavigator = createAppContainer(createStackNavigator({
    Home: {
        screen: Tabs
    },
    DeckView: {
        screen: DeckView
    },
    NewCard: {
        screen: NewCard,
        navigationOptions: ({ navigation }) => ({
            title: 'New Card'
        })
    },
    QuizView: {
        screen: Quiz,
        navigationOptions: ({ navigation }) => ({
            title: 'Quiz'
        })
    }
}));

export default MainNavigator;