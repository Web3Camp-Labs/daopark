const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ACCESS_TOKEN':
            return { ...state, accessToken: action.payload };

        case 'SET_INFO':
            return { ...state, info: action.payload };



        default:
            throw new Error(`Unknown type: ${action.type}`);
    }
};
export default reducer
