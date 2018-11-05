import axios from 'axios';

const GET_SNIPPET_URL = "http://localhost:4000/api/codes"
const POST_SNIPPET_URL = "http://localhost:4000/api/codes"

/**
 * @desc Here you will find all the actions related to snippets.
 */


// Get snippets
export function snippetIsLoading(bool) {
    return {
        type: 'SNIPPET_IS_LOADING',
        isLoading: bool
    };
}

export function snippetLoadingError(bool) {
    return {
        type: 'SNIPPET_LOADING_ERROR',
        hasError: bool
    };
}

export function snippetLoaded(snippet) {
    return {
        type: 'GET_SNIPPET_SUCCESS',
        snippet
    };
}

export function getAllSnippets() {
    return (dispatch) => {
        dispatch(snippetIsLoading(true));
        axios.get(`${GET_SNIPPET_URL}`)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                dispatch(snippetIsLoading(false));
                return response;
            })
            .then((snippet) => 
                dispatch(snippetLoaded(snippet)))
            .catch(() =>
                dispatch(snippetLoadingError(true)));
    };
}


// Post new snippet
export function addingSnippet(bool) {
    return {
        type: 'ADD_SNIPPET',
        wasAdded: bool
    };
}

export function snippetAdded(snippet) {
    return {
        type: 'SNIPPET_POST_SUCCESS',
        snippet
    };
}

export function snippetAddError(bool) {
    return {
        type: 'SNIPPET_POST_ERROR',
        hasError: bool
    };
}

export function postSnippet(values) {
    return (dispatch) => {
        dispatch(addingSnippet(true));
        axios.post(`${POST_SNIPPET_URL}`, values)
        .then(response => {
            dispatch(addingSnippet(false));
            return response;
        })
        .then((snippet) =>
            dispatch(snippetAdded(snippet)))
        .catch(() =>
                dispatch(snippetAddError(true)));
    };
}







