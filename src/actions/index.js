import { 
    LOAD_SERVICES,
    LOADING_SERVICES,
    LOADED_SERVICES
} from '../constants/actionsTypes';

const loadServices = () => ({
    type: LOAD_SERVICES,
});
const loadingServices = (data) => ({
    type: LOADING_SERVICES,
    payload: data
});
const loadedServices = (data) => ({
    type: LOADED_SERVICES,
    payload: data
});

export {
    loadServices,
    loadingServices,
    loadedServices
}