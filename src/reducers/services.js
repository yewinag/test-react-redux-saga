import {     
    REQUEST_DATA,
    RECEIVE_DATA
} from '../constants/actionsTypes';
const INITIAL_STATE = {
    isLoading: false,
    data: []
}
const services = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_DATA:
            return {
                ...state,
                ...{
                    isLoading: true,
                    data: []
                },
            };
        case RECEIVE_DATA:
            return {
                ...state,
                ...{
                    isLoading: false,
                    data: action.payload
                }
                
            };        
        default:
            return state;
    }
};

export default services;
