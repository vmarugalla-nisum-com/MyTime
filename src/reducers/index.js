import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LeftNav from './LeftNav';
import ContentSection from './ContentSection';

export default combineReducers({
    LeftNavData: LeftNav,
    ContentSection: ContentSection
});