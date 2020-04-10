/**
 * @author Brain Hang (zyh940305858@163.com)
 * @creationDate 2020 04 05
 * @description 详情页
 * @lastEditDate 2020 04 06
 */

import React from 'react';
import Head from 'next/head';
import '../public/style/pages/detailed.css';
import { Row, Col, Breadcrumb, Affix } from 'antd';
import axios from 'axios';
import { CalendarOutlined, FolderOpenOutlined, FireOutlined } from '@ant-design/icons';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import ReactMarkdown from 'react-markdown';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

const Detailed = () =>{

    const markdownContent = 
      '## p01:课程介绍和环境搭建\n' +
      '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
      '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
       '**这是加粗的文字**\n\n' +
      '*这是倾斜的文字*`\n\n' +
      '***这是斜体加粗的文字***\n\n' +
      '~~这是加删除线的文字~~ \n\n'+
      '\`console.log(111)\` \n\n'+
      '## p02:来个Hello World 初始Vue3.0\n' +
      '> aaaaaaaaa\n' +
      '>> bbbbbbbbb\n' +
      '>>> cccccccccc\n'+
      '***\n\n\n' +
      '## p03:Vue3.0基础知识讲解\n' +
      '> aaaaaaaaa\n' +
      '>> bbbbbbbbb\n' +
      '>>> cccccccccc\n\n'+
      '## p04:Vue3.0基础知识讲解\n' +
      '> aaaaaaaaa\n' +
      '>> bbbbbbbbb\n' +
      '>>> cccccccccc\n\n'+
      '## p05:Vue3.0基础知识讲解\n' +
      '> aaaaaaaaa\n' +
      '>> bbbbbbbbb\n' +
      '>>> cccccccccc\n\n'+
      '## p06:Vue3.0基础知识讲解\n' +
      '> aaaaaaaaa\n' +
      '>> bbbbbbbbb\n' +
      '>>> cccccccccc\n\n'+
      '## p07:Vue3.0基础知识讲解\n' +
      '> aaaaaaaaa\n' +
      '>> bbbbbbbbb\n' +
      '>>> cccccccccc\n\n'+
      '``` var a=11; ```'


    return (
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
                            <ReactMarkdown
                                source={markdownContent}
                                escapeHtml={false}
                            />
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
                    {/* Markdown导航栏 */}
                    <Affix offsetTop={5} >
                        <div className="detailed_nav comm_box">
                            <div className="nav_title">文章目录</div>
                            <MarkNav
                                className="article_menu"
                                source={markdownContent}
                            />
                        </div>
                    </Affix>
                </Col>
            </Row>
            {/* 博客底部 */}
            <Footer />
        </div>
    )
}

Detailed.getInitialProps = async(context)=>{
    console.log(context.query.id);

    let id = context.query.id;

    const promise = new Promise(reslove=>{
        axios('http://127.0.0.1:7001/default/getArticleById/'+id)
        .then(res=>{
            console.log(res)
            reslove(res.data.data[0])
        })
    })

    return await promise;
}

export default Detailed;