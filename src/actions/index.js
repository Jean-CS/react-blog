import _ from 'lodash';
import jsonplaceholder from '../api/jsonplaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    /*
        We are manually calling an action creator which is going to return an async inner function,
        which in turn, redux-thunk will "catch" it and invoke it with dispatch.
        And we are 'await'ing it, because we need to wait for the api request to be completed
        before we do anything else
    */
    await dispatch(fetchPosts())

    // Gets only the 'userId' property and value from 'getState().posts'
    const userIds = _.map(getState().posts, 'userId')

    /*
        Returns only the unique ids from the list.

        Could be written with native javascript as:
            const uniqueUserIds = [...new Set(userIds)]
    */
    const uniqueUserIds = _.uniq(userIds)

    uniqueUserIds.forEach(id => dispatch(fetchUser(id)))

    /*
        Another way to do those steps above, using lodash chain method:

        _.chain(getState().posts)
            .map('userId')
            .uniq()
            .forEach(id => dispatch(fetchUser(id)))
            .value()
    */

    dispatch({ type: 'FETCH_POSTS_AND_USERS'})
}

export const fetchUser = id => async dispatch => {
    const response = await jsonplaceholder.get(`/users/${id}`)

    dispatch({ type: 'FETCH_USER', payload: response.data })
}

/* 
    This returns an inner function. 
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