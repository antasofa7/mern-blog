import React, { useEffect, useState } from 'react';
import { BlogItem, Button, Gap } from '../../components';
import './home.scss';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
    // const [dataBlogs, setDataBlog] = useState([]);

    const {dataBlog} = useSelector(state => state);
    const dispatch = useDispatch();
    // console.log('state global >> ', stateGlobal)
    
    useEffect(() => {
        axios.get('http://localhost:4000/v1/blog/posts?page=2')
        .then(result => {
            console.log('data API', result.data);
            const responseApi = result.data;
            // setDataBlog(responseApi.data);

            dispatch({type: 'UPDATE_DATA_BLOG', payload: responseApi.data});
        })
        .catch(err => console.log('err >>', err))
    }, [])
    const history = useHistory();
    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title="create blog" onClick={() => history.push('/create-blog')} />
            </div>
            <Gap height={20} />
            <div className="content-wrapper">
                {dataBlog.map(blog => {
                    return (
                        <BlogItem 
                            key={blog._id} 
                            image={`http://localhost:4000/${blog.image}`}
                            title={blog.title}
                            body={blog.body}
                            name={blog.author.name}
                            date={blog.createdAt}
                        />
                     )
                })}
            </div>
            <div className="pagination">
                <Button title="Previous" />
                <Gap width={20} />
                <Button title="Next" />
            </div>
            <Gap height={20} />
        </div>        
    )
}

export default Home