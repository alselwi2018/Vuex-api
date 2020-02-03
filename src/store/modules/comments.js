import axios from 'axios'

const state = {

    comments : []
};

const getters = {
    allComments: (state) => state.comments
};

const actions = {
    async fetchData({commit}){
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        commit('setComments', response.data);
    },
    async addComment({commit}, email){
        const res = await axios.post('https://jsonplaceholder.typicode.com/comments', {email});
        commit('newComments', res.data);
    },
    async deleteComment({commit}, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
        commit('removeComment', id);
    },
    async filterComment({commit} , e){
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}`);
        commit('setComments', response.data);
    },
    async updateComment({ commit }, updComment){
        const res = await axios.put(`https://jsonplaceholder.typicode.com/comments/${updComment}`);
        commit('updateComment', res.data);
    }
};
 

const mutations = {
    setComments: (state, comments) => (state.comments = comments),
    newComments: (state, comment) => state.comments.unshift(comment),
    removeComment: (state, id) => state.comments = state.comments.filter(comment => comment.id !== id),
    updateComment: (state, updComment) => {
        const index = state.comments.findIndex(comment => comment.id === updComment.id);
        if(index !== -1){
            state.comment.splice(index, 1, updComment);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}