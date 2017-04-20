import * as type from './type';

export default {
    [type.ADD_COLLECTION](state, collection) {
        state.collections.push(collection);
    }
}