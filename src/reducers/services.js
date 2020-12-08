import { 
    LOAD_SERVICES,
    LOADING_SERVICES,
    LOADED_SERVICES
} from '../constants/actionsTypes';
const INITIAL_STATE = {
    isLoading: false,
    data: []
}
const services = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_SERVICES:
            return {
                ...state,
                ...{
                    isLoading: true,
                    data: []
                },
            };
        case LOADING_SERVICES:
            return {
                ...state,
                ...{
                    isLoading: true,
                    data: action.payload
                }
                
            };
        case LOADED_SERVICES:
            return {
                ...state,
                ...{
                    isLoading: false,
                    data: action.payload
                },
            };
        default:
            return state;
    }
};

export default services;
