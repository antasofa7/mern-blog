import axios from "axios";

export const setDataBlog = () => (dispatch) => {
    axios.get('http://localhost:4000/v1/blog/posts?page=1')
    .then(result => {
        console.log('data API', result.data);
        const responseApi = result.data;

        dispatch({type: 'UPDATE_DATA_BLOG', payload: responseApi.data});
    })
    .catch(err => console.log('err >>', err))
}