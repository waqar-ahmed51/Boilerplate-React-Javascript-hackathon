//Centralized State (Rdux Store) for all compoments in the application.
const InitialState = {
    ObjectData: [],
    myvar: 0
};

const AppReducerStore = (state = InitialState, action) => {
    switch (action.type) {
        case "addObject": {
            //Adding new object
            return {
                // returning a copy of orignal state
                ...state, //spreading the original state
                ObjectData: [...state.ObjectData, action.payload], // new object array
            }
        }
        default:
            return state;
    }
};
export default AppReducerStore;