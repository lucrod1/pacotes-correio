<template>
  <div id="wrapper">
    <form class="form-horizontal">
      <div class="container">
        <div class="row">
          <div class="form-group form-group-sm col-sm-6">
            <div class="row">
              <label for="room_number" class="col-sm-3 col-form-label">Número da Sala</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="room_number" name="room_number" v-model="room.number">
              </div>
            </div>
          </div>
          <div class="form-group form-group-sm col-sm-6">
            <div class="row">
              <label for="name" class="col-sm-3 col-form-label">Nome</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="name" name="name" v-model="room.name">
              </div>
            </div>
          </div>
          <div class="form-group form-group-sm col-sm-6">
            <div class="row">
              <label for="responsible" class="col-sm-3 col-form-label">Responsável</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="responsible" name="responsible" v-model="room.responsible">
              </div>
            </div>
          </div>
          <div class="form-group form-group-sm col-sm-6">
            <div class="row">
              <label for="observation" class="col-sm-3 col-form-label">Observação</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="observation" name="observation" v-model="room.observation">
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div class="row">
      <button type="button" class="btn btn-primary" @click="save()">Cadastrar</button>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="r in rooms">
            <th scope="row">{{r.number}}</th>
            <td >{{r.name}}</td>
            <td >{{r.responsible}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import store from '../store/index';

  export default {
    name: 'room',
    components: { },
    data() {
      return {
        room: {
          number: 0,
          name: '',
          responsible: '',
          observation: ''
        }
      };
    },
    computed: mapState({
      room: state => state.room.room,
      rooms: state => state.room.rooms
    }),
    methods: {
      ...mapActions([
        '..store/modules/room',
      ]),
      save() {
        store.dispatch({
          type: 'room/create',
          room: {number: 10, name: 'redspark', observation: 'testeee', responsible: 'Bruno Quieroz'}
        });
      },
    },
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
            radial-gradient(
                    ellipse at top left,
                    rgba(255, 255, 255, 1) 40%,
                    rgba(229, 229, 229, .9) 100%
            );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
</style>
