import React, { useState, useEffect, useMemo } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, message } from 'antd';
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
    const [editingKey, setEditingKey] = useState('');
    const dispatch = useDispatch();
    const render = (_, record) => {
        const editable = isEditing(record);
        // console.log("RECORD :", record)
        return editable ? (
            <span>
                <a
                    href="javascript:;"
                    onClick={() => save(record.telephoneID)}
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
    }

    dispatch(actions.editTableColumns(render))

    const isEditing = (record) => record.telephoneID === editingKey;

    const edit = (record) => {
        form.setFieldsValue({
            telephoneID: '',
            userName: '',
            title: '',
            extention: '',
            directLine: '',
            location: '',
            ...record,
        });
        setEditingKey(record.telephoneID);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (telephoneID) => {
        try {
            const row = await form.validateFields();
            const newData = [...props.dataSource];
            const index = newData.findIndex((item) => telephoneID === item.telephoneID);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setEditingKey('');
                console.log(newData[index])
                dispatch(actions.editTableUpdate(newData[index]))
                window.location.reload()
                message.success({
                    content: "Telephone Table Updated!",
                    style: { marginTop: '6rem' },
                    duration: 2,
                });
            } else {
                newData.push(row);
                setEditingKey('');
                dispatch(actions.editTableUpdate(newData[index]))
                window.location.reload()
                message.warning({
                    content: `${index}`,
                    style: { marginTop: '6rem' },
                    duration: 2,
                });
            }
        } catch (errInfo) {
            message.error({
                content: `Validate Failed: ${errInfo}`,
                style: { marginTop: '6rem' },
                duration: 1,
            });
        }
    };

    const mergedColumns = props.columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

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
                    columns={mergedColumns}
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