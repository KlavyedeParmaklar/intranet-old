import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../utility'
import { Modal } from 'antd'
import { EditOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'

const initialState = {
    telephoneColumns: [
        {
            title: '#',
            dataIndex: 'telephoneID',
            key: 'telephoneID',
        },
        {
            title: 'Name',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Extention',
            dataIndex: 'extention',
            key: 'extention',
        },
        {
            title: 'Direct Line',
            dataIndex: 'directLine',
            key: 'directLine',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Operation',
            dataIndex: 'operation',
            render: () => {
                return <EditOutlined />
            }
        }
    ],
    telephoneList: [],
    telephoneSearched: [],
    show: false,
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
        default: return state
    }
}

export default reducer