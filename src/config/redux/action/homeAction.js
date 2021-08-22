import axios from "axios";

export const setDataBlog = (page) => (dispatch) => {
    axios.get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=4`)
    .then(result => {
        // console.log('data API', result.data);
        const responseApi = result.data;
        // console.log('responseApi >> ', responseApi)

        dispatch({type: 'UPDATE_DATA_BLOG', payload: responseApi.data});
        dispatch({
            type: 'UPDATE_PAGE', 
            payload: {
                currentPage: responseApi.current_page,
                totalPage: Math.ceil(responseApi.total_data / responseApi.per_page)
             }
            })
    })
    .catch(err => console.log('err >>', err))
}