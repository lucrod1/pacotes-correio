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
  },
  LIST_ALL (state, rooms) {
    state.rooms = rooms
  },
  REMOVE_BY_NUMBER (state, roomNumber) {
    Room.destroy({ where: { number: roomNumber} }).then((result) => {
      console.log(result)
    })
  },
}

const actions = {
  create ({ commit }, action) {
    commit('CREATE_NEW_ROOM', action.room)
  },
  list ({ commit }) {
    Room.findAll().then(rooms => {
      console.log('find all:', rooms)
      commit('LIST_ALL', rooms)
    })
  },
  remove ({ commit }, roomNumber) {
    commit('REMOVE_BY_NUMBER', roomNumber)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
