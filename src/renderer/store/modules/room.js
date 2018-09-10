import Room from '../../models/Room';

const state = {
  room: {},
  rooms: []
}

const mutations = {
  SAVE (state, room) {
    console.log(room);
    // var room = {number: 10, name: 'redspark', observation: 'testeee', responsible: 'Bruno Quieroz'};
    if(room.id) {
      Room.update(room, { fields: ['observation','name', 'responsible'],  where: { id: room.id} })
    } else {
      Room.create(room);
      state.rooms.push(room);
    }
    // console.log('CREATE_NEW_ROOM');
  },
  LIST_ALL (state, rooms) {
    state.rooms = rooms
  },
  REMOVE_BY_ID (state, roomId) {
    Room.destroy({ where: { id: roomId} }).then((result) => {
      console.log(result)
    })
  },
}

const actions = {
  create ({ commit }, room) {
    commit('SAVE', room)
  },
  list ({ commit }) {
    Room.findAll().then(rooms => {
      commit('LIST_ALL', rooms)
    })
  },
  remove ({ commit }, roomId) {
    commit('REMOVE_BY_ID', roomId)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
