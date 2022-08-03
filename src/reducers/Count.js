const Count = (state = 0, action) => {
    switch (action.type) {
        case 'incremet':
            return ++state;
        default:
            return state;
    }
}
export default Count;