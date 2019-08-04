

const initialDetails = {
    username: 'Yasin',
    fullname: 'Guest'
}

const userdetails = (state = initialDetails, action) => {
    switch (action.type) {
        case 'UPDATE_DETAILS' : {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
};
export default userdetails;