import * as type from './type';

export default {
    addCollection ({commit}, collection) {
        commit(type.ADD_COLLECTION, collection);
    }
}
