import React, { Component } from 'react'

// Redux Actions
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'

// UI
import Input from '../../../components/UI/Input/Input'

class NotebookModal extends Component {
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedNotebook = { ...this.props.updateNotebookTable }
        const updatedNotebookID = { ...updatedNotebook[inputIdentifier] }
        updatedNotebookID.value = event.target.value
        updatedNotebook[inputIdentifier] = updatedNotebookID
        this.props.onUpdateNotebookState(updatedNotebook)
    }

    formSubmit = (event) => {
        let updatedNotebook = {}
        for (let key in this.props.updateNotebookTable) {
            updatedNotebook[key] = this.props.updateNotebookTable[key].value
        }
        console.log("ID :", updatedNotebook)
        this.props.onUpdateNotebookList(updatedNotebook)
        this.props.onCloseModal()
        // Have to refresh page because AJAX cannot read properties after update immediately
        window.location.reload();

    }

    render() {
        // const notebookList = this.props.notebookListFilter.map(key => {
        let notebookArray = []
        for (let key in this.props.updateNotebookTable) {
            notebookArray.push({
                id: key,
                config: this.props.updateNotebookTable[key]
            })
        }
        const notebookList = (
            <form>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th scope="col">Notebook Model</th>
                            <th scope="col">Serial No</th>
                            <th scope="col">Notebook Name</th>
                            <th scope="col">AnyDesk ID</th>
                            <th scope="col">Owner</th>
                            <th scope="col">Owner Email</th>
                            <th scope="col">Owner Email For OTP</th>
                            <th scope="col">Notebook Delivery Date</th>
                            <th scope="col">Notebook Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {notebookArray.map(nbList => (
                                <td key={nbList.id}>
                                    <Input
                                        key={nbList.id}
                                        elementType={nbList.config.elementType}
                                        elementConfig={nbList.config.elementConfig}
                                        value={nbList.config.value}
                                        id={nbList.config.id}
                                        invalid={!nbList.config.validation}
                                        shouldValidate={nbList.config.validation}
                                        touched={nbList.config.touched}
                                        onChange={(event) => this.inputChangedHandler(event, nbList.id)}
                                    />
                                </td>
                            ))
                            }
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={(event) => this.formSubmit(event)} type="button" className="btn btn-primary">Submit</button>
            </form>
        )
        //   })
        return (
            <div>
                {notebookList}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    notebookListFilter: state.notebookTable.notebookListFilter,
    updateNotebookTable: state.notebookTable.updateNotebookTable
})

const mapDispatchToProps = dispatch => ({
    onUpdateNotebookState: (updatedNotebook) => dispatch(actions.updateNotebookState(updatedNotebook)),
    onUpdateNotebookList: (updateNotebookList) => dispatch(actions.updateNotebooklist(updateNotebookList)),
    onCloseModal: () => dispatch(actions.notebookCloseModal())
})


export default connect(mapStateToProps, mapDispatchToProps)(NotebookModal)