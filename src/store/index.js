import Vuex from 'vuex';
import Vue from 'vue';
import comments from './modules/comments';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        comments
    }
}
);