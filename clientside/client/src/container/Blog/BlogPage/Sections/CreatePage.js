import React, { useState, useEffect } from 'react'

import { Button, Form, Typography, message } from 'antd'
import axios from 'axios'
import QuilEditor from '../../../../components/UI/Quilljs Editor/QuillEditor'
const { Title } = Typography

function CreatePage(props) {

    const user = JSON.parse(localStorage.getItem('user'))
    console.log("user", user)
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

        if (user && !user.isAuth) {
            return alert("Please Log in first!")
        }

        const variables = {
            content: content,
            userID: user._id
        }

        axios.post('/api/blog/createPost', variables).then(response => {
            console.log(response)
            if (response.data.success) {
                message.success({
                    content: 'Post Created!',
                    duration: 2,
                    style: { marginTop: '6rem' }
                })

                setTimeout(() => {
                    props.history.push('/blog')
                }, 2000);
            }
        })
    }


    return (
        <div>
            <div style={{ maxWidth: '700px', margin: '6rem auto' }}>
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
                            onClick={onSubmit}
                        >Submit</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default CreatePage
