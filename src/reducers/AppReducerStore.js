//Centralized State (Rdux Store) for all compoments in the application.
const InitialState = {
    CartItems: [],
    TotalCartItems: 0,
    totalPriceCartItems: 0,
};

const AppReducerStore = (state = InitialState, action) => {
    switch (action.type) {
        case "ItemAddedCart": {
            return state;
        }
        default:
            return state;
    }
};
export default AppReducerStore;