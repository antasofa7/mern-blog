import React from 'react';
import { RegisterBG } from '../../../assets';
import './blogItem.scss'

const BlogItem = () => {
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBG} alt="post" />
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date post</p>
                <p className="body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto delectus voluptate velit ad perferendis porro, impedit sit iste ipsum molestiae at ullam quo? Nam dolores eveniet aperiam assumenda nobis laboriosam.</p>
            </div>
        </div>
    )
}

export default BlogItem
