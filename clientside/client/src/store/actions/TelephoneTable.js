import * as actionTypes from '../actions/actionTypes'
import axios from '../../axios'

export const telephoneSearchFilter = (searchTelItem) => {
    return {
        type: actionTypes.SEARCHTELEPHONEITEM,
        searchTelItem: searchTelItem
    }
}

export const fetchTelephoneList = (telephoneList) => {
    return{
        type: actionTypes.FETCHTELEPHONELIST,
        telephoneList: telephoneList
    }
}

export const fetchTelephoneLists = () => {
    return dispatch => {
        const API_URL_FETCHTELEPHONELIST = 'api/alltelephones'
        axios.get(API_URL_FETCHTELEPHONELIST).then(response => {
            dispatch(fetchTelephoneList(response.data))
        })
    }
}