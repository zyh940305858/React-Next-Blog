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

import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';

import Tocify from '../public/style/components/tocify.tsx';

const Detailed = (props) =>{

    const tocify = new Tocify();
    const renderer = new marked.Renderer();

    renderer.heading = function(text, level, raw){
        const anchor = tocify.add(text, level);
        return `<a id="${anchor}" href="#${anchor}" class="anchor_fix" ><h${level}>${text}</h${level}></a>\n`
    }

    marked.setOptions({
        renderer:renderer,
        gfm: true,
        pedantic: false, // 是否容错
        sanitize: false, // 是否忽略html标签
        tables: true, // 是否支持表格
        breaks: true, // 是否支持换行符
        smartLists: true, // 自动渲染列表
        highlight: function(code){
            return hljs.highlightAuto(code).value
        }
    })

    let html = marked(props.article_content)

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
                        <div className="detailed_content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        >
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
                            {
                                tocify && tocify.render()
                            }
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