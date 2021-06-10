import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../utility'

const initialState = {
    telephoneColumns: {
        telephoneID: {
            title: '#',
            dataIndex: 'telephoneID',
            key: 'telephoneID',
        },
        userName: {
            title: 'Name',
            dataIndex: 'userName',
            key: 'userName',
        },
        title: {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        extention: {
            title: 'Extention',
            dataIndex: 'extention',
            key: 'extention',
        },
        directLine: {
            title: 'Direct Line',
            dataIndex: 'directLine',
            key: 'directLine',
        },
        location: {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        operation: {
            title: 'Operation',
            dataIndex: 'operation',
            render: {}
        },
    },
    telephoneList: [],
    telephoneSearched: [],
    telephoneColumnsArray: [],
    show: false,
}

const editableColumns = (state, action) => {
    state.telephoneColumns.operation.render = action.columnsData
    return updatedObject(state, { telephoneColumns: state.telephoneColumns })
}

const allTelephoneList = (state, action) => {
    return updatedObject(state, { telephoneList: action.telephoneList, telephoneSearched: action.telephoneList })
}

const telephoneSearchFilter = (state, action) => {
    let searchedTelItem = state.telephoneList.filter(value => value.userName.toLowerCase().includes(action.searchTelItem.toLowerCase()))
    return updatedObject(state, { telephoneSearched: searchedTelItem })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHTELEPHONELIST: return allTelephoneList(state, action)
        case actionTypes.SEARCHTELEPHONEITEM: return telephoneSearchFilter(state, action)
        case actionTypes.EDITTABLECOLUMNS: return editableColumns(state, action)
        default: return state
    }
}

export default reducer