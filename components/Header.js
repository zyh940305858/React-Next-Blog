/**
 * @author Brain Hang (zyh940305858@163.com)
 * @creationDate 2020 04 04
 * @description 首页-头部导航栏
 * @lastEditDate 2020 04 04
 */

import React, { useState, useEffect } from 'react';
import '../public/style/components/header.css';
import { Row, Col, Menu } from 'antd';
import { HomeOutlined, PlayCircleOutlined, CoffeeOutlined } from '@ant-design/icons';
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import servicePath from '../config/apiUrl';

const Header = () =>{
    
    const [navArray, setNavArray] = useState([]);
    useEffect(() =>{
        const fetchData = async () =>{
            const result = await axios(servicePath.getTypeInfo)
            .then(res =>{
                return res.data.data
            });
            setNavArray(result);
        }

        fetchData();
    },[])

    const hanleClick = e =>{
        console.log(e)
        if(e.key!=="0"){
            Router.push('/list?id='+e.key);
        }else{
            Router.push('/index');
        }
    }

    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12} >
                    <span className="header_logo">Brain Hang</span>
                    <span className="header_text">一名专注的前端开发工程师</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal" onClick={hanleClick}>
                        <Menu.Item key={0}>
                            首页
                        </Menu.Item>
                        {
                            navArray.map(item=>{

                                return (
                                    <Menu.Item key={item.id}>
                                        {item.typeName}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header;