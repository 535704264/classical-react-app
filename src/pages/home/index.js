import React, {useEffect} from 'react'
import {Col, Row, Card} from 'antd'
import './home.css'
import {getData} from '../../api'

const Home = () => {
    const userImg = require("../../assets/images/user.png")
    useEffect(()=>{
        getData().then((res)=>{
            console.log(res)
        })
    },[])
    return (
        <Row className = "home">
            <Col span={8}>
                <Card hoverable>
                    <div className='user'>
                        <img src={userImg}/>
                        <div className='userInfo'>
                            <p className='name'>Admin</p>
                            <p className='access'>超级管理员</p>
                        </div>
                    </div>
                    <div className='login-info'>
                        <p>上次登陆时间：<span>2024.05.02</span></p>
                        <p>上次登陆地点：<span>地那拉</span></p>
                    </div>
                </Card>
            </Col>
            <Col span={16}></Col>
        </Row>
    )
}

export default Home