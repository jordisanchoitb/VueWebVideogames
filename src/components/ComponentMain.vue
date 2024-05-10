<template>
  <section id="Videojuegos">
    <div id="TituloBoton">
      <h2 class="h2videojocs">VideoJuegos</h2>
      <button v-if="mostrarformadd" @click="OcultarFormAdd" class="botonesCRUD">Ocultar</button>
      <button v-else @click="MostrarFormAdd" class="botonesCRUD">Añadir</button>
    </div>
    <div class="divCRUD">
      <ComponentAdd v-if="mostrarformadd" @gameadd="sendgameadd"/>
    </div>
    <div class="rallaVideojocs"></div>
    <div class="divVideojocs">
      <div class="grid">
        <article v-for="(game, index) in games" :key="index" class="articleVideojocs">
          <img :src="game.image" :alt="game.name" class="articleVideojocs">
          <h3 class="h3videojocs">{{ game.name }}</h3>
          <p class="pvideojocs">{{ game.description }}</p>
          <div id="crudsmoddel">
            <button v-if="mostrarformmodify[index]" @click="OcultarFormModify(index)"
              class="botonesCRUD">Ocultar</button>
            <button v-else @click="MostrarFormModify(index)" class="botonesCRUD">Modificar</button>
            <button @click="GameDelete(game.name)"  class="botonesCRUD">Eliminar</button>
          </div>
          <div id="formModify" v-if="mostrarformmodify[index]">
            <ComponentModify :gameobject="game" @gameobjectmodify="sendgameobjectmodify"/>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import ComponentAdd from '../components/ComponentAdd.vue'
import ComponentModify from '../components/ComponentModify.vue'

//const images = require.context('../assets', true);

export default {
  name: 'ComponentMain',
  emits: ['gamedelete', 'gameobjectmodify', 'gameadd'],
  props: ["games"],
  components: {
    ComponentAdd,
    ComponentModify,
  },
  methods: {
    MostrarFormAdd() {
      this.mostrarformadd = true;
    },
    OcultarFormAdd() {
      this.mostrarformadd = false;
    },
    MostrarFormModify(index) {
      this.mostrarformmodify[index] = true;
    },
    OcultarFormModify(index) {
      this.mostrarformmodify[index] = false;
    },
    GameDelete(gamename) {
      this.$emit('gamedelete', gamename);
    },
    sendgameobjectmodify(game) {
      this.$emit('gameobjectmodify', game);
    },
    sendgameadd(game) {
      this.$emit('gameadd', game);
      this.OcultarFormAdd();
    },
  },
  data() {
    return {
      mostrarformadd: false,
      mostrarformmodify: [],     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#formModify {
  margin-bottom: 0.5rem;
}

#crudsmoddel {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 0.5rem;
}

.rallaVideojocs {
  border: 2px solid var(--azul);
  width: 95%;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

#TituloBoton {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.botonesCRUD {
  background-color: var(--azul);
  color: var(--naranja);
  border: 2px solid var(--naranja);
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  width: 5rem;
  height: 2rem;
}

.botonesCRUD:hover {
  background-color: var(--naranja);
  color: var(--azul);
}

.divCRUD {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
}
</style>
