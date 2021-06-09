import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';

class TelephoneTableDS extends Component {
    componentDidMount() {
        this.props.onFetchTelephoneList()
    }

    render() {
        return (
            <div className="container">
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
                <Form>
                    <Table
                        dataSource={this.props.telephoneSearched}
                        columns={this.props.telephoneColumns}
                        rowClassName="editable-row"
                    />
                </Form>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    telephoneSearched: state.telephoneTable.telephoneSearched,
    telephoneColumns: state.telephoneTable.telephoneColumns
})

const mapDispatchToProps = dispatch => ({
    onFetchTelephoneList: () => dispatch(actions.fetchTelephoneLists()),
    onChangeTelSearchFilter: (searchTelItem) => dispatch(actions.telephoneSearchFilter(searchTelItem))
})


export default connect(mapStateToProps, mapDispatchToProps)(TelephoneTableDS)