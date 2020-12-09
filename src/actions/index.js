import { 
    LOAD_SERVICES,
    LOADING_SERVICES,
    LOADED_SERVICES,
    REQUEST_DATA,
    RECEIVE_DATA
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
const requestData = (params) => ({
    type: REQUEST_DATA,
    payload: params
})
const receiveFilterData = (payload) =>({
    type: RECEIVE_DATA,
    payload: payload
})
export {
    loadServices,
    loadingServices,
    loadedServices,
    requestData,
    receiveFilterData
}