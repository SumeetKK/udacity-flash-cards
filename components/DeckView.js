import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { connect } from '../store'
import { removeDeck } from '../store/actions'


class DeckView extends Component {

    static navigationOptions = ({ navigation }) => {
        const { deckTitle } = navigation.state.params;
        return {
            title: deckTitle
        }
    }

    deleteDeck = (deckTitle) => {
        this.props.dispatch(removeDeck(this.state, deckTitle));
        this.props.navigation.goBack();
      }
   

    render() {
        const { decks } = this.props;
        const { deckTitle } = this.props.navigation.state.params;
        const deck = decks[deckTitle];
        
        return (
            <View style={style.container}>
                <Text h2>{deck.title}</Text>
                <Text h3>{deck.questions.length} cards</Text>
                <Button
                    title="Add Card"
                    onPress={() => this.props.navigation.navigate('NewCard', { deckTitle: deck.title })}
                    buttonStyle={style.btn}
                />
                <Button buttonStyle={[style.btn, style.blackBg]}
                    title="Start Quiz"
                    onPress={() => this.props.navigation.navigate('QuizView', { deckTitle: deck.title })}
                />
                {(false) && 
                <Button buttonStyle={[style.btn, style.whiteBg]} titleStyle={style.redColor}
                    title="Delete Deck"
                    onPress={() => this.deleteDeck(deck.title)}
                />}
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    blackBg : {
        backgroundColor: 'black'
    },
    whiteBg: {
        backgroundColor: '#ffffff',  
    },
    redColor: {
        color: "#ff0000",
    },
    btn: {
        marginTop: 20
    }
});

const mapStateToProps = ({ decks }) => ({
    decks,
});

export default connect(mapStateToProps)(DeckView);