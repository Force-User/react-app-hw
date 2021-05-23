import { REMOVE_CARD, SET_CARDS } from '../actions/cardsAction';

const initialState = {
	cards: []
};

const cardsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CARDS:
			return {
				...state,
				cards: [ ...action.payload.cards ]
			};
		case REMOVE_CARD:
			return {
				...state,
				cards: [ ...state.cards.filter((item) => item.id !== Number(action.payload.id)) ]
			};
		default:
			return state;
	}
};

export default cardsReducer;
