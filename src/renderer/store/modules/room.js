import Room from '../../models/Room';

const state = {
  room: {},
  rooms: []
}

const mutations = {
  CREATE_NEW_ROOM (state, room) {
    console.log(room);
    // var room = {number: 10, name: 'redspark', observation: 'testeee', responsible: 'Bruno Quieroz'};
    Room.create(room);
    state.rooms.push(room);
    // console.log('CREATE_NEW_ROOM');
  }
}

const actions = {
  create ({ commit }, action) {
    commit('CREATE_NEW_ROOM', action.room)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
