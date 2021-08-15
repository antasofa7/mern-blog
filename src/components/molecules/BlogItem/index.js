import React from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterBG } from '../../../assets';
import { Button, Gap } from '../../atoms';
import './blogItem.scss'

const BlogItem = () => {
    const history = useHistory();
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBG} alt="post" />
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date post</p>
                <p className="body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto delectus voluptate velit ad perferendis porro, impedit sit iste ipsum molestiae at ullam quo? Nam dolores eveniet aperiam assumenda nobis laboriosam.</p>
                <Gap height={20} />
                <Button title="View Detail" onClick={() => history.push('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem
