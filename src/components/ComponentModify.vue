<template>
  <section id="ComponentModify">
    <form id="formadd" @submit="submitformmodify">
      <label for="name">Nuevo nombre:</label>
      <input type="text" id="name" name="name" :value="gameobject.name"><br><br>
      <label for="description">Nueva descripcion:</label>
      <textarea id="description" name="description" :value="gameobject.description"></textarea><br><br>
      <label for="image">Nueva imagen:</label>
      <input type="file" id="image" name="image" @change="onFileSelected"><br><br>
      <input id="submitinput" type="submit" value="Submit">
    </form>
  </section>
</template>

<script>
export default {
  name: 'ComponentModify',
  props: ["gameobject"],
  emits: ['gameobjectmodify'],
  data() {
    return {
      image: '',
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
    submitformmodify(event) {
      event.preventDefault();
      let game = {
        oldname: this.gameobject.name,
        name: event.target.name.value,
        description: event.target.description.value,
        image: this.image,
      }
      this.$emit('gameobjectmodify', game);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#description {
  width: 90%;
  overflow-y: auto;
  max-height: 200px;
}
#ComponentModify {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
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
@media (min-width: 768px) and (max-width: 1500px) {
  #formadd {
    width: 70%;
  }
  #submitinput {
    background-color: var(--azul);
    color: var(--naranja);
    font-weight: bold;
    border: 2px solid var(--naranja);
    border-radius: 1rem;
    padding: 0.5rem;
    cursor: pointer;
    font-size: medium;
  }
  #name {
    width: 90%;
    font-size: small;
  }
  #description {
    width: 90%;
    overflow-y: auto;
    height: 100px;
    max-height: 300px;
  }
  #image {
    width: 95%;
  }
}

@media (max-width: 768px) {
  #formadd {
    width: 70%;
  }
  #submitinput {
    background-color: var(--azul);
    color: var(--naranja);
    font-weight: bold;
    border: 2px solid var(--naranja);
    border-radius: 1rem;
    padding: 0.5rem;
    cursor: pointer;
    font-size: medium;
  }
  #name {
    width: 90%;
    font-size: small;
  }
  #description {
    width: 90%;
    overflow-y: auto;
    height: 100px;
    max-height: 300px;
  }
  #image {
    width: 95%;
  }
}
</style>
