<template>
  <section id="ComponentAdd">
    <form id="formadd" @submit.prevent="submitformadd">
      <label for="name">Nombre juego:</label>
      <input type="text" id="name" name="name" v-model="name"><br><br>
      <label for="description">Descripcion juego:</label>
      <input type="text" id="description" name="description" v-model="description"><br><br>
      <label for="image">Imagen juego:</label>
      <input type="file" id="image" name="image" @change="onFileSelected"><br><br>
      <input id="submitinput" type="submit" value="Submit">
    </form>
  </section>
</template>

<script>
export default {
  name: 'ComponentAdd',
  emits: ['gameadd'],
  data() {
    return {
      name: '',
      description: '',
      image: '',
      imagesToSave: [],
    }
  },
  methods: {
    onFileSelected(event) {
      const selectedFile = event.target.files[0];
      if (!selectedFile) return;
      const reader = new FileReader();
      reader.onload = () => {
        this.image = reader.result;
      }
      reader.readAsDataURL(selectedFile);
    },
    submitformadd(event) {
      event.preventDefault();
      let game = {
        name: this.name,
        description: this.description,
        image: this.image,
      }
      this.$emit('gameadd', game);
      let inputname = document.getElementById('name');
      let inputdescription = document.getElementById('description');
      let inputimage = document.getElementById('image');
      inputname.value = '';
      inputdescription.value = '';
      inputimage.value = '';
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#ComponentAdd {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

#formadd {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

form>label {
  font-weight: bold;
}

form {
  border: 4px solid var(--azul);
  padding: 1rem;
  border-radius: 1rem;
}

form>input {
  margin: 0.5rem;
}

#submitinput {
  background-color: var(--azul);
  color: var(--naranja);
  font-weight: bold;
  border: 2px solid var(--naranja);
  border-radius: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  font-size: large;
}

#submitinput:hover {
  background-color: var(--naranja);
  color: var(--azul);
}
</style>
