import { combineReducers } from 'redux';
import commentsReducers from 'reducers/comments';

export default combineReducers({
    comments: commentsReducers
});
