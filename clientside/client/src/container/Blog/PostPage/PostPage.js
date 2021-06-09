import React, { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment'
import { Layout, Card, Icon, Avatar, Row, Col, Typography } from 'antd';

const { Title } = Typography
const { Footer } = Layout;

function PostPage(props) {

    const [post, setPost] = useState([])
    const postId = props.match.params.postId;

    useEffect(() => {

        const variable = { postId: postId }

        axios.post('/api/blog/getPost', variable)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.post)
                    setPost(response.data.post)
                } else {
                    alert('Couldnt get post')
                }
            })
    }, [])

    if (post.writer) {
        return (
            <div className="postPage" style={{ width: '80%', margin: '6rem auto' }}>
                <Row>
                    <Col span={6}><Title level={4}>{post.writer.name}`s Post</Title></Col>
                    <Col span={6}><Title level={5}>{moment(post.createdAt).format('DD MMMM YYYY, h:mm a')}</Title></Col>
                </Row>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        )
    } else {
        return (
            <div style={{ width: '80%', margin: '3rem auto' }}>loading...</div>
        )
    }

}

export default PostPage