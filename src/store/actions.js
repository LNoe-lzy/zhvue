import * as type from './type';

export default {
    addCollection ({commit}, collection) {
        commit(type.ADD_COLLECTION, collection);
    },
    removeCollection ({commit}, index) {
        commit(type.REMOVE_COLLECTION, index);
    },
    addFollow ({commit}, follow) {
        commit(type.ADD_FOLLOW,  follow);
    },
    removeFollow ({commit}, index) {
        commit(type.REMOVE_FOLLOW, index);
    }
}
