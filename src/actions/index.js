import jsonplaceholder from '../api/jsonplaceholder';

export const fetchUser = (id) => async dispatch => {
    const response = await jsonplaceholder.get(`/users/${id}`)

    dispatch({ type: 'FETCH_USER', payload: response.data })
}

// This returns a function. 
// It is necessary because of redux-thunk and 
// how it enables redux actions to receive a 
// function until the api responds
export const fetchPosts = () => async dispatch => {
    const response = await jsonplaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

// Can be written as: 
/*
export const fetchPosts = () => {
    return async function (dispatch, getState) {
        const response = await jsonplaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response })
    }
}
*/