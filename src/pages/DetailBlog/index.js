import React from 'react';
import { LoginBG } from '../../assets';
import './detailBlog.scss';

const DetailBlog = () => {
    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={LoginBG} alt="thumb" />
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date post</p>
            <p className="blog-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto delectus voluptate velit ad perferendis porro, impedit sit iste ipsum molestiae at ullam quo? Nam dolores eveniet aperiam assumenda nobis laboriosam.</p>
        </div>
    )
}

export default DetailBlog