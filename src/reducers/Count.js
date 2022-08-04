const Count = (state = 0, action) => {
    switch (action.type) {
        case 'increment':
            return ++state;
        default:
            return state;
    }
}
export default Count;