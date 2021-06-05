import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class TelephoneTable extends Component {
    componentDidMount() {
        this.props.onFetchTelephoneList()
    }

    render() {

        let telephoneList = (
            <div>
                <div className="row">
                    <div className="mt-3 mb-3 col-md-6">
                        <input
                            type="text"
                            placeholder="Search by Name"
                            className="form-control"
                            // style={{ marginTop: 50, marginBottom: 20, width: "40%" }}
                            onChange={(event) => this.props.onChangeTelSearchFilter(event.target.value)}
                        />
                    </div>
                </div>

                <table className="table table-hover">
                    <thead style={{ backgroundColor: "#dc6114" }} >
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Extention</th>
                            <th>Direct Line</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.telephoneSearched.map(tel => (
                                <tr key={tel.telephoneID}>
                                    <td>{tel.telephoneID}</td>
                                    <td>{tel.userName}</td>
                                    <td>{tel.title}</td>
                                    <td>{tel.extention}</td>
                                    <td>{tel.directLine}</td>
                                    <td>{tel.location}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>)

        return (
            <div className="container">
                {telephoneList}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    telephoneSearched: state.telephoneTable.telephoneSearched
})

const mapDispatchToProps = dispatch => ({
    onFetchTelephoneList: () => dispatch(actions.fetchTelephoneLists()),
    onChangeTelSearchFilter: (searchTelItem) => dispatch(actions.telephoneSearchFilter(searchTelItem))
})


export default connect(mapStateToProps, mapDispatchToProps)(TelephoneTable)