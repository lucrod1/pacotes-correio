<template>
  <div id="wrapper">
    <form class="form-horizontal">
      <div class="container">
        <div class="row">
          <div class="form-group form-group-sm col-sm-6">
            <div class="row">
              <label for="room_number" class="col-sm-3 col-form-label">Número da Sala</label>
              <div class="col-sm-3">
                <input type="text" :disabled="editing" class="form-control" id="room_number" name="room_number" v-model="room.number">
              </div>
            </div>
          </div>
          <div class="form-group form-group-sm col-sm-6"></div>
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
                <textarea type="text" class="form-control" id="observation" name="observation" v-model="room.observation"></textarea>
              </div>
            </div>
          </div>
          <div class="form-group form-group-sm col-sm-6"></div>
          <div class="form-group form-group-sm col-sm-6">
            <div class="row">
              <label class="col-sm-3 col-form-label"></label>
              <div class="col-sm-9">
                <button type="button" class="btn btn-primary mr-3" @click="save()">Salvar</button>
                <button type="button" v-if="editing" class="btn btn-warning" @click="remove()">Deletar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

    <br/>
    <div class="row">
      <div class="col-sm-12">
        <table class="table table-condensed">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Responsável</th>
              <th scope="col">Observação</th>
            </tr>
          </thead>
          <tbody>
            <tr class="cursor-pointer" v-for="r in rooms" @click="openForEdit(r)">
              <td scope="row">{{r.number}}</td>
              <td >{{r.name}}</td>
              <td >{{r.responsible}}</td>
              <td >{{r.observation}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import store from '../store/index';

  export default {
    name: 'room',
    data() {
      return {
        room: {},
        editing: false
      };
    },
    computed: mapState({
      rooms: state => state.room.rooms
    }),
    methods: {
      refreshRooms () {
        store.dispatch('room/list')
      },
      resetRoom () {
          this.room = {
              number: null,
              name: '',
              responsible: '',
              observation: ''
          };
          this.editing = false;
      },
      save() {
        store.dispatch('room/save', this.room).then(() => {
          this.resetRoom();
          this.refreshRooms();
        })
      },
      openForEdit (r) {
        this.room = JSON.parse(JSON.stringify(r));
        this.editing = true;
      },
      remove () {
        store.dispatch('room/remove', this.room.id).then(() => {
          this.resetRoom();
          this.refreshRooms();
        })
      }
    },
    created () {
      this.resetRoom();
      this.refreshRooms();
    }
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

  .cursor-pointer{
    cursor: pointer;
  }
</style>
