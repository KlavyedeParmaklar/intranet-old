import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../utility'

const initialState = {
    telephoneList: [],
    telephoneSearched: [],
    show: false,
}

const allTelephoneList = (state, action) => {
    return updatedObject(state, { telephoneList: action.telephoneList, telephoneSearched: action.telephoneList })
}

const telephoneSearchFilter = (state, action) => {
    let searchedTelItem = state.telephoneList.filter(value => value.userName.toLowerCase().includes(action.searchTelItem.toLowerCase()))
    return updatedObject(state, {telephoneSearched: searchedTelItem})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHTELEPHONELIST: return allTelephoneList(state, action)
        case actionTypes.SEARCHTELEPHONEITEM: return telephoneSearchFilter(state, action)
        default: return state
    }
}

export default reducer