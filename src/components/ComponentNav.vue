<template>
  <nav>
    <button id="menu-button" @click="toggleMenu">☰</button>
    <ul class="navul" v-if="showMenu || isLargeScreen">
      <li class="menu"><a class="nava" href="#Home">Home</a></li>
      <li class="menu"><a class="nava" href="#Videojuegos">VideoJuegos</a></li>
      <li class="menu"><a class="nava" href="#Trucos">Trucos</a></li>
      <li class="menu"><a class="nava" href="#Noticias">Noticias</a></li>
      <li class="menu"><a class="nava" href="#Ranking">Ranking</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'ComponentNav',
  data() {
    return {
      showMenu: false,
      windowWidth:0,
    };
  },
  computed: {
    isLargeScreen() {
      return this.windowWidth > 768;
    },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
}
</script>

<style scoped>
/* Estilos para el botón del menú */
#menu-button {
  display: none;
  cursor: pointer;
  font-size: 30px;
  background-color: var(--azul);
  color: var(--naranja);
}

/* Estilos para el menú cuando está oculto */
.navul {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding-left: 0px;
}

/* Estilos para cuando la pantalla es pequeña */
@media (max-width: 768px) {
  /* Muestra el botón del menú */
  #menu-button {
    display: block;
  }

  /* Oculta el menú */
  .navul {
    display: none;
    width: 100%;
  }

  nav {
    display: flex;
    flex-direction: row-reverse;
  }

  /* Muestra el menú cuando showMenu es true */
  .navul {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
</style>