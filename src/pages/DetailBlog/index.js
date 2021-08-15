import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginBG } from '../../assets';
import { Link } from '../../components';
import './detailBlog.scss';

const DetailBlog = () => {
    const history = useHistory();
    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={LoginBG} alt="thumb" />
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date post</p>
            <p className="blog-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto delectus voluptate velit ad perferendis porro, impedit sit iste ipsum molestiae at ullam quo? Nam dolores eveniet aperiam assumenda nobis laboriosam.</p>
            <Link title="Kembali ke Homepage" onClick={() => history.push('/')} />
        </div>
    )
}

export default DetailBlog