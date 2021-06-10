import React, { Component } from 'react'
import moment from 'moment'

// Modal
// import Modal from '../../components/UI/Modal/Modal'
import { Modal, message, Button } from 'antd';

// Notebook Modal Component
import NotebookModal from './NotebookModal/NotebookModal'
import NoteBooktableAdd from './NoteBookTableAdd/NoteBooktableAdd'

// Redux Actions
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

// React Icon
import { AiOutlineCopy, AiOutlinePlus } from 'react-icons/ai'

// React Clipboard
import { CopyToClipboard } from 'react-copy-to-clipboard'

class NoteBookTable extends Component {
    componentDidMount() {
        this.props.onFetchNotebookList()
    }

    render() {
        let notebookList = (
            <div>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <input
                            type="text"
                            placeholder="Search by Owner"
                            className="form-control col-sm-6"
                            // style={{ marginTop: 50, marginBottom: 20, width: "40%" }}
                            onChange={(event) => this.props.onChangeSearchFilter(event.target.value)}
                        /></div>
                    <div className="col-sm-12 col-md-6">
                        <button onClick={() => this.props.onOpenAddModal()} className="btn btn-primary"><AiOutlinePlus /> New Notebook</button>
                    </div>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
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
                        {this.props.notebookSearched.map(nbList => (
                            <tr key={nbList.notebookID}>
                                <th scope="row">{nbList.notebookID}</th>
                                <td>{nbList.notebookModal}</td>
                                <td>{nbList.notebookSerialNo}</td>
                                <td>{nbList.notebookName}</td>
                                <td>{nbList.anydeskID}<CopyToClipboard text={nbList.anydeskID}>
                                    <AiOutlineCopy onClick={() => message.success({
                                        content: `Copied '${nbList.anydeskID}' ID to Clipboard!`,
                                        style: { marginTop: '6rem' },
                                        duration: .5,
                                    })} /></CopyToClipboard></td>
                                <td>{nbList.owner}</td>
                                <td>{nbList.ownerMail}</td>
                                <td>{nbList.ownerOTP}</td>
                                <td>{moment(nbList.deliveryDate).format('DD/MM/YYYY')}</td>
                                <td>{nbList.notebookStatus}</td>
                                <td><button onClick={() => this.props.onOpenModal(nbList.notebookID)} type="button" className="btn btn-danger">Edit</button></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        )

        return (
            <div>
                <div className="container">
                    <Modal
                        title="Title"
                        centered
                        visible={this.props.show}
                        onCancel={this.props.onCloseModal}
                        footer={null}
                        width={2000}
                    >
                        <NotebookModal />
                    </Modal>
                    <Modal
                        title="Add New Notebook Please!"
                        centered
                        visible={this.props.showAddTable}
                        onCancel={this.props.onCloseAddModal}
                        footer={null}
                        width={1000}
                    >
                        <NoteBooktableAdd />
                    </Modal>
                </div>
                <div className="container-fluid">{notebookList}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    show: state.notebookTable.show,
    showAddTable: state.notebookTable.showAddTable,
    notebookSearched: state.notebookTable.notebookSearched
})

const mapDispatchToProps = dispatch => ({
    onOpenModal: (id) => dispatch(actions.notebookOpenModal(id)),
    onOpenAddModal: () => dispatch(actions.notebookOpenAddModal()),
    onCloseModal: () => dispatch(actions.notebookCloseModal()),
    onCloseAddModal: () => dispatch(actions.notebookCloseAddModal()),
    onFetchNotebookList: () => dispatch(actions.fetchNotebookLists()),
    onChangeSearchFilter: (searchItem) => dispatch(actions.changeSearchFilter(searchItem))
})


export default connect(mapStateToProps, mapDispatchToProps)(NoteBookTable)