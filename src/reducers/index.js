import {combineReducers} from 'redux';
import { addingSnippet, snippetAddError, snippetAdded, snippetIsLoading, snippetLoadingError, snippets } from './reducer_snippets';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    snippetIsLoading,
    snippetLoadingError,
    snippets,
    addingSnippet,
    snippetAddError,
    snippetAdded,
    form: formReducer
});
