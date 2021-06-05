import * as actionTypes from './actionTypes'
import axios from '../../axios'

export const notebookOpenModal = (id) => {
    return {
        type: actionTypes.NOTEBOOK_OPENMODAL,
        NotebookID: id
    }
}

export const notebookCloseModal = () => {
    return {
        type: actionTypes.NOTEBOOK_CLOSEMODAL
    }
}

export const updateNotebookState = (updatedNotebook) => {
    return {
        type: actionTypes.NOTEBOOK_UPDATE_STATE,
        updatedNotebook: updatedNotebook
    }
}

export const updateNotebookAddState = (updatedNotebookAdd, formIsValid) => {
    return {
        type: actionTypes.NOTEBOOK_UPDATE_ADD_STATE,
        updatedNotebookAdd: updatedNotebookAdd,
        formIsValid: formIsValid
    }
}

export const changeSearchFilter = (searchItem) => {
    return {
        type: actionTypes.NOTEBOOK_SEARCH_ITEM,
        searchItem: searchItem
    }
}

export const fetchNotebookList = (notebookList) => {
    return {
        type: actionTypes.FETCHNOTEBOOKLIST,
        NotebookList: notebookList
    }
}

export const fetchNotebookLists = () => {
    return dispatch => {
        const API_URL_FETCHNOTEBOOK = 'api/notebooklist'
        axios.get(API_URL_FETCHNOTEBOOK).then(response => {
            dispatch(fetchNotebookList(response.data))
        })
    }
}

export const addNotebook = (notebook) => {
    return dispatch => {
        const API_URL_ADDNOTEBOOK = 'api/addnotebook'
        axios.post(API_URL_ADDNOTEBOOK, notebook)
    }
}

export const updateNotebooklist = (notebook) => {
    return dispatch => {
        const API_URL_UPDATENOTEBOOK = 'api/update'
        axios.post(API_URL_UPDATENOTEBOOK, notebook)
    }
}

