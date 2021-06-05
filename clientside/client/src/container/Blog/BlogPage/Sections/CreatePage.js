import React, { useState, useEffect } from 'react'

import { Button, Form, Typography, message } from 'antd'
import axios from 'axios'
import { useSelector } from 'react-redux'
import QuilEditor from '../../../../components/UI/Quilljs Editor/QuillEditor'
const { Title } = Typography

function CreatePage(props) {
    const user = useSelector(state => state.user)

    const [content, setContent] = useState("")
    const [file, setFile] = useState([])

    const onEditorChange = (value) => {
        setContent(value)
    }

    const onFilesChange = (files) => {
        setFile(files)
    }

    const onSubmit = (event) => {
        event.preventDefault()

        setContent("")

        // if (user.userData && !user.userData.isAuth) {
        //     return alert("Please Log in first!")
        // }

        const variables = {
            content: content
            // userID: user.userData._id
        }

        axios.post('http://localhost:5000/api/blog/createPost', variables).then(response => {
            if (response.data.success) {
                message.success('Post Created!')

                setTimeout(() => {
                    props.history.push('/blog')
                }, 2000);
            }
        })
    }


    return (
        <div>
            <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
                <div style={{ textAlign: 'center' }}>
                    <Title level={2}>Editor</Title>
                </div>
                <QuilEditor
                    placeholder={"Start Posting Something"}
                    onEditorChange={onEditorChange}
                    onFilesChange={onFilesChange}
                />
                <Form onSubmit={onSubmit}>
                    <div style={{ textAlign: 'center', margin: '2rem' }}>
                        <Button
                            size="large"
                            htmlType="submit"
                            className=""
                            onSubmit={onSubmit}
                        >Submit</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default CreatePage
