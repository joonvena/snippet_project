const INITIAL_STATE = [{snippets: [], snippet: null }];

export function snippetIsLoading(state = false, action) {
    switch (action.type) {
        case 'SNIPPET_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function snippetLoadingError(state = false, action) {
    switch (action.type) {
        case 'SNIPPET_LOADING_ERROR':
            return action.hasError;
        default:
            return state;
    }
}


export function snippets(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_SNIPPET_SUCCESS':
            return action.snippet.data;
        default:
            return state;
    }
}

export function addingSnippet(state = false, action) {
    switch (action.type) {
        case 'ADD_SNIPPET':
            return action.wasAdded;
        default:
            return state;
    }
}

export function snippetAddError(state = false, action) {
    switch (action.type) {
        case 'SNIPPET_POST_ERROR':
            return action.hasError;
        default:
            return state;
    }
}

export function snippetAdded(state = [], action) {
    switch (action.type) {
        case 'SNIPPET_POST_SUCCESS':
            return action.snippet;
        default:
            return state;
    }
}