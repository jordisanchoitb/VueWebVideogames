<template>
  <section id="Videojuegos">
    <h2 class="h2videojocs">VideoJuegos</h2>
    <div class="divVideojocs">
      <div class="grid">
        <article v-for="(game, index) in games" :key="index" class="articleVideojocs">
          <img :src="game.image" :alt="game.name" class="articleVideojocs">
          <h3 class="h3videojocs">{{ game.name }}</h3>
          <p class="pvideojocs">{{ game.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
const images = require.context('../assets', true);

export default {
  name: 'ComponentMain',
  data() {
    return {
      games: [
        {
          name: 'Minecraft',
          image: images("./minecraft.png"),
          description: 'Minecraft es un videojuego de construcción de tipo «mundo abierto» o en inglés sandbox creado originalmente por el sueco Markus Persson (conocido comúnmente como «Notch»), que creo posteriormente Mojang Studios (actualmente parte de Microsoft). Fue lanzado el 17 de mayo de 2009, y después de numerosos cambios, su primera versión estable «1.0» fue publicada el 18 de noviembre de 2011.',
        },
        {
          name: 'League of Legends',
          image: images("./LOL.jpg"),
          description: 'League of Legends (también conocido por sus siglas LoL), es un videojuego multijugador de arena de batalla en línea desarrollado y publicado por Riot Games. Inspirándose en Defense of the Ancients, un mapa personalizado para Warcraft III, los fundadores de Riot buscaron desarrollar un juego independiente del mismo género. Desde su lanzamiento en octubre de 2009, LoL ha sido un juego gratuito y se monetiza a través de la compra de elementos para la personalización de personajes.',
        },
        {
          name: 'CSGO',
          image: images('./csgoicon.png'),
          description: 'Counter-Strike (CS) es una serie de videojuegos tácticos multijugador de disparos en primera persona en los que equipos de terroristas luchan para perpetrar un acto de terror (bombardeo, toma de rehenes, asesinato) mientras que los contraterroristas intentan prevenirlo (desactivación de bombas, rescate de rehenes, misión de escolta), fue lanzado el 2012 i su desarollador Valve Corporation.',
        },
        {
          name: 'Xenoblade Chronicle 2',
          image: images("./XenobladeChronicles2.jpg"),
          description: 'Xenoblade Chronicles 2, conocido como Xenoblade 2 en Japón, es un videojuego de rol que ha sido desarrollado por Monolith Soft y publicado por Nintendo para la consola de videojuegos Nintendo Switch. Es parte de la serie Xeno, específicamente como una secuela del primer Xenoblade Chronicles, y fue lanzado mundialmente el 1 de diciembre de 2017.',
        },
        {
          name: 'Stardew Valley',
          image: images("./strardewvalley.jpg"),
          description: 'Stardew Valley es un RPG de vida en el campo! Hereda la vieja granja de tu abuelo en Stardew Valley. Armado con herramientas de segunda mano y algo de dinero, te dispones a empezar tu nueva vida. ¿Podrás aprender a vivir de la tierra y a convertir esos campos de malezas en un hogar próspero? No va a ser fácil. Fue disenyado por Eric Barone y se estreno el 26 de febrero del 2016.',
        },
        {
          name: 'NieR: Automata',
          image: images("./nierautomata.png"),
          description: 'NieR:Automata (ニーア オートマタ Nīa Ōtomata) es un videojuego de rol de acción desarrollado por PlatinumGames y publicado por Square Enix para PlayStation 4, Microsoft Windows y Xbox One, así como para Nintendo Switch. Aunque en un principio la distribuidora planeó su lanzamiento para noviembre de 2016, finalmente lo publicó el 23 de febrero de 2017 en Japón.',
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
