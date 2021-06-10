import React, { useState, useEffect, useMemo } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';
import { connect, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../store/actions/index'

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const EditableTable = (props) => {
    const [form] = Form.useForm();
    const [data, setData] = useState([]);
    const [editingKey, setEditingKey] = useState('');
    const dispatch = useDispatch();

    const editColumns = {       
        render: (_, record) => {
            const editable = isEditing(record);
            return editable ? (
                <span>
                    <a
                        href="javascript:;"
                        onClick={() => save(record.key)}
                        style={{
                            marginRight: 8,
                        }}
                    >
                        Save
                  </a>
                    <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                        <a>Cancel</a>
                    </Popconfirm>
                </span>
            ) : (
                <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                    Edit
                </Typography.Link>
            );
        },
    }

    dispatch(actions.editTableColumns(editColumns))

    const isEditing = (record) => record.key === editingKey;

    const edit = (record) => {
        form.setFieldsValue({
            name: '',
            age: '',
            address: '',
            ...record,
        });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    return (
        <div>
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={props.dataSource}
                    columns={props.columns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                />
                {console.log("columns: ", props.columns)}
            </Form>
        </div>

    );
}

export default EditableTable