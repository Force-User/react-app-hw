import { apiCall } from '../../api/mockedAPI';
export const SET_CARDS = 'SET_CARDS';
export const REMOVE_CARD = "REMOVE_CARDS";

export const setCards = (cards) => ({
	type: SET_CARDS,
	payload: { cards }
});

export const removeCard = (id) => ({
    type:REMOVE_CARD,
    payload:{id},
})

export const getCards = () => (dispatch) => {
	apiCall().then((cards) => {
		console.log(setCards(cards));
		dispatch(setCards(cards));
	});
};
