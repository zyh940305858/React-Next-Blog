/**
 * @author Brain Hang (zyh940305858@163.com)
 * @creationDate 2020 04 05
 * @description 详情页
 * @lastEditDate 2020 04 05
 */

import React from 'react';
import Head from 'next/head';
import '../public/style/pages/detailed.css';
import { Row, Col, Breadcrumb } from 'antd';
import { CalendarOutlined, FolderOpenOutlined, FireOutlined } from '@ant-design/icons';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';

const Detailed = () => (
    <div className="detailed">
        <Head>
            <title>Detailed</title>
        </Head>

        {/* 头部导航组件 */}
        <Header />

        {/* 两栏布局 */}
        <Row 
            className="comm_main" 
            type="flex" 
            justify="center" 
        >
            <Col 
                className="comm_left" 
                xs={24} 
                sm={24} 
                md={16} 
                lg={18} 
                xl={14} 
            >
                <div>
                    <div className="bread_div">
                        <Breadcrumb>
                            <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                            <Breadcrumb.Item><a href="/list">文章列表</a></Breadcrumb.Item>
                            <Breadcrumb.Item>XXX</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <div>
                    <div className="detailed_title">
                        React实战博客项目开发 Brain Hang
                    </div>
                    <div className="list_icon center">
                        <span><CalendarOutlined />2020-4-6</span>
                        <span><FolderOpenOutlined />随笔</span>
                        <span><FireOutlined />1000人观看</span>
                    </div>
                    <div className="detailed_content">
                        MarkDown 内容
                    </div>
                </div>
            </Col>
            <Col 
                className="comm_right" 
                xs={0} 
                sm={0} 
                md={7} 
                lg={5} 
                xl={4} 
            >
                {/* 个人信息 */}
                <Author />
                {/* 通用广告栏 */}
                <Advert />
            </Col>
        </Row>
        <Footer />
    </div>
)

export default Detailed;