import _ from 'lodash';
import jsonplaceholder from '../api/jsonplaceholder';

export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);
/* 
    We are memoizing this function so that we don't call it everytime
    we need to make the same repeated requests to, for example: /users/1
    
    Example:
        - When we call '/users/1' the first time, the function is executed,
        a network request is made and the result is returned
  
        - When the same call to '/users/1' is made a second time, 
        that's where memoization comes to play. The network request 
        is NOT made. It simply returns the results from the 
        first execution of the function
*/
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`)

    dispatch({ type: 'FETCH_USER', payload: response.data })
})

/* 
    This returns a function. 
    It is necessary because of redux-thunk and how it enables 
    redux actions to receive a function until the api responds
*/
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