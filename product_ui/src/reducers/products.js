

const initialDetails = {
    productdata: [],
    editrecord: null
}

const products = (state = initialDetails, action) => {
    switch (action.type) {
        case 'UPDATE_PRODUCTS' : {
            return {
                ...state, 
                productdata: action.data
            }
        }
        case 'UPDATE_EDIT_RECORD' : {
            return {
                ...state,
                editrecord: action.data
            }
        }
        default:
            return state;
    }
};
export default products;