import Room from '../../models/Room';

const state = {
  room: {}, // é preciso manter esse cara? acredito que não pois nao trocamos info desse cara entre os comps!
  rooms: []
};

const mutations = {
  SAVE (state, room) {
    console.log(room);
    // var room = {number: 10, name: 'redspark', observation: 'testeee', responsible: 'Bruno Quieroz'};
    if(room.id) {
      Room.update(room, { fields: ['observation','name', 'responsible'],  where: { id: room.id} })
      // verficar nesse momento como ja atualizar a rooms novamente, sem o callback
      // qual a mehor pratica? chamar outra action daqui direto? usar o callback?
      // ver onde isso deve ocorrer, qual a melhor pratica?!
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
      console.log(result);
     // verficar nesse momento como ja atualizar a rooms novamente, conforme item acima do update
    })
  },
};

const actions = {
  save ({ commit }, room) {
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
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
