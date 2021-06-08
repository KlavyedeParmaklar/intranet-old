import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../utility'

const initialState = {
    addNotebookTable: {
        notebookModal: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
            placeholder: 'Notebook Modal'
        },
        notebookSerialNo: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
            placeholder: 'Notebook Serial No'
        },
        notebookName: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
            placeholder: 'Notebook Name'
        },
        anydeskID: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
                isNumeric: true
            },
            valid: false,
            touched: false,
            placeholder: 'AnyDesk ID'
        },
        owner: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
                isLetter: true
            },
            valid: false,
            touched: false,
            placeholder: 'Owner Name'
        },
        ownerMail: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
                isMail: true
            },
            valid: false,
            touched: false,
            placeholder: 'Owner Mail'
        },
        ownerOTP: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
                isMail: true
            },
            valid: false,
            touched: false,
            placeholder: 'Owner Mail for OTP'
        },
        deliveryDate: {
            elementType: 'date',
            elementConfig: {
                type: 'date'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
            placeholder: 'Dalivery Date'
        },
        notebookStatus: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: 'WORKING', displayValue: 'WORKING' },
                    { value: 'BROKEN', displayValue: 'BROKEN' }
                ]
            },
            value: 'WORKING',
            valid: true,
        },
    },
    updateNotebookTable: {
        notebookID: {
            elementType: 'label',
            elementConfig: {
                type: 'text'
            },
            value: '',
        },
        notebookModal: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: true,
            touched: false
        },
        notebookSerialNo: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: true,
            touched: false
        },
        notebookName: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: true,
            touched: false
        },
        anydeskID: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
                isNumeric: true
            },
            valid: true,
            touched: false
        },
        owner: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
                isLetter: true
            },
            valid: true,
            touched: false
        },
        ownerMail: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
                isMail: true
            },
            valid: true,
            touched: false
        },
        ownerOTP: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
                isMail: true
            },
            valid: true,
            touched: false
        },
        deliveryDate: {
            elementType: 'date',
            elementConfig: {
                type: 'date'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: true,
            touched: false
        },
        notebookStatus: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: 'WORKING', displayValue: 'WORKING' },
                    { value: 'BROKEN', displayValue: 'BROKEN' }
                ]
            },
            value: '',
            validation: {},
            valid: true,
        },
    },
    notebookList: [],
    notebookListFilter: [],
    notebookListModal: [],
    notebookSearched: [],
    show: false,
    showAddTable: false,
    formIsValid: false
}

const notebookOpenModal = (state, action) => {
    let modalNotebook = state.notebookList.filter(notebookList => notebookList.notebookID === action.NotebookID)
    state.updateNotebookTable.notebookID.value = modalNotebook[0].notebookID
    state.updateNotebookTable.notebookModal.value = modalNotebook[0].notebookModal
    state.updateNotebookTable.notebookSerialNo.value = modalNotebook[0].notebookSerialNo
    state.updateNotebookTable.notebookName.value = modalNotebook[0].notebookName
    state.updateNotebookTable.anydeskID.value = modalNotebook[0].anydeskID
    state.updateNotebookTable.owner.value = modalNotebook[0].owner
    state.updateNotebookTable.ownerMail.value = modalNotebook[0].ownerMail
    state.updateNotebookTable.ownerOTP.value = modalNotebook[0].ownerOTP
    state.updateNotebookTable.deliveryDate.value = modalNotebook[0].deliveryDate
    state.updateNotebookTable.notebookStatus.value = modalNotebook[0].notebookStatus
    return updatedObject(state, { notebookListFilter: modalNotebook, show: true })
}

const notebookCloseModal = (state, action) => {
    return updatedObject(state, { show: false })
}

const notebookOpenAddModal = (state, action) => {
    return updatedObject(state, { showAddTable: true })
}

const notebookCloseAddModal = (state, action) => {
    return updatedObject(state, { showAddTable: false })
}

const updateNotebookState = (state, action) => {
    return updatedObject(state, { updateNotebookTable: action.updatedNotebook })
}

const updateNotebookAddState = (state, action) => {
    return updatedObject(state, { addNotebookTable: action.updatedNotebookAdd, formIsValid: action.formIsValid })
}

const fetchNotebookList = (state, action) => {
    return updatedObject(state, { notebookList: action.NotebookList, notebookSearched: action.NotebookList })
}

const changeSearchFilter = (state, action) => {
    let searchedItem = state.notebookList.filter(value => value.owner.toLowerCase().includes(action.searchItem.toLowerCase()))
    return updatedObject(state, {notebookSearched: searchedItem})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NOTEBOOK_OPENMODAL: return notebookOpenModal(state, action)
        case actionTypes.NOTEBOOK_CLOSEMODAL: return notebookCloseModal(state, action)
        case actionTypes.NOTEBOOK_OPENADDMODAL: return notebookOpenAddModal(state, action)
        case actionTypes.NOTEBOOK_CLOSEADDMODAL: return notebookCloseAddModal(state, action)
        case actionTypes.NOTEBOOK_UPDATE_STATE: return updateNotebookState(state, action)
        case actionTypes.NOTEBOOK_UPDATE_ADD_STATE: return updateNotebookAddState(state, action)
        case actionTypes.FETCHNOTEBOOKLIST: return fetchNotebookList(state, action)
        case actionTypes.NOTEBOOK_SEARCH_ITEM: return changeSearchFilter(state, action)
        default: return state
    }
}

export default reducer