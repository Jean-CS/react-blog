import jsonplaceholder from '../api/jsonplaceholder';

// This returns a function. 
// It is necessary because of redux-thunk and 
// how it enables redux actions to receive a 
// function until the api responds
export const fetchPosts = () => async dispatch => {
    const response = await jsonplaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response })
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