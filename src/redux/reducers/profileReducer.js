const initialState = {
	fullName: 'Jay Jonah Jameson',
	position: 'Owner of the Daily Bugle',
	info: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat modi
    deleniti amet tenetur totam impedit cum ullam quae, sequi enim non
    iste nemo eveniet vitae ab quasi nulla architecto cumque!
    `
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default profileReducer; 
