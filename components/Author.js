/**
 * @author Brain Hang (zyh940305858@163.com)
 * @creationDate 2020 04 05
 * @description 首页-作者信息
 * @lastEditDate 2020 04 05
 */

import { Avatar, Divider } from 'antd';
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import '../public/style/components/author.css';

const Author = ()=>{
    return (
        <div className="author_div comm_box">
            <div><Avatar size="100" src="" /></div>
            <div className="author_introduction">
                一个有追求的前端程序员
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className="account" />
                <Avatar size={28} icon={<QqOutlined />} className="account" />
                <Avatar size={28} icon={<WechatOutlined />} className="account" />
            </div>
        </div>
    )
}

export default Author;