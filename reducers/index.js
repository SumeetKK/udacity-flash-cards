import { RECEIVE_DECKS, STORE_DECK, STORE_CARD_TO_DECK, REMOVE_DECK } from '../actions';

function deckReducer(state = {}, action) {
    switch (action.type) {

        case RECEIVE_DECKS:
            return { ...state, decks: action.decks };

        case STORE_DECK:
            return { decks: { ...state.decks, [action.deck.title]: action.deck } };

        case STORE_CARD_TO_DECK:
            const decks = { ...state.decks };
            decks[action.deckTitle].questions.push(action.card);
            return { ...state, decks };
        case REMOVE_DECK:
            const newDecks = { ...state.decks };
            newDecks[action.deckTitle] = null
            return { ...state, decks };
        default:
            return state;
    }
}

export default deckReducer;