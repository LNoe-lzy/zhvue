import * as type from './type';

export default {
    [type.ADD_COLLECTION](state, collection) {
        state.collections.push(collection);
    },
    [type.REMOVE_COLLECTION](state, index) {
        state.collections.splice(index, 1);
    },
    [type.ADD_FOLLOW](state, follow) {
        state.follows.push(follow);
    },
    [type.REMOVE_FOLLOW](state, index) {
        state.follows.splice(index, 1);
    }
}