<template>
    <ComponentHeader />
    <ComponentNav />
    <ComponentMain :games="allGames" @gamedelete="deleteGame" @gameobjectmodify="modifyObject" @gameadd="addGame"/>
    <ComponentAside />
    <ComponentRanking />
    <ComponentFooter />
</template>

<script>
import ComponentHeader from './components/ComponentHeader.vue'
import ComponentNav from './components/ComponentNav.vue'
import ComponentAside from './components/ComponentAside.vue'
import ComponentFooter from './components/ComponentFooter.vue'
import ComponentRanking from './components/ComponentRanking.vue'
import ComponentMain from './components/ComponentMain.vue'
const images = require.context('./assets', true);

const defaultgames = new Map([
    ["Minecraft", {
        name: 'Minecraft',
        image: images("./minecraft.png"),
        description: 'Minecraft es un videojuego de construcción de tipo «mundo abierto» o en inglés sandbox creado originalmente por el sueco Markus Persson (conocido comúnmente como «Notch»), que creo posteriormente Mojang Studios (actualmente parte de Microsoft). Fue lanzado el 17 de mayo de 2009, y después de numerosos cambios, su primera versión estable «1.0» fue publicada el 18 de noviembre de 2011.',
    }],
    ["League of Legends", {
        name: 'League of Legends',
        image: images("./LOL.jpg"),
        description: 'League of Legends (también conocido por sus siglas LoL), es un videojuego multijugador de arena de batalla en línea desarrollado y publicado por Riot Games. Inspirándose en Defense of the Ancients, un mapa personalizado para Warcraft III, los fundadores de Riot buscaron desarrollar un juego independiente del mismo género. Desde su lanzamiento en octubre de 2009, LoL ha sido un juego gratuito y se monetiza a través de la compra de elementos para la personalización de personajes.',
    }],
    ["CSGO", {
        name: 'CSGO',
        image: images('./csgoicon.png'),
        description: 'Counter-Strike (CS) es una serie de videojuegos tácticos multijugador de disparos en primera persona en los que equipos de terroristas luchan para perpetrar un acto de terror (bombardeo, toma de rehenes, asesinato) mientras que los contraterroristas intentan prevenirlo (desactivación de bombas, rescate de rehenes, misión de escolta), fue lanzado el 2012 i su desarollador Valve Corporation.',
    }],
    ["Xenoblade Chronicle 2", {
        name: 'Xenoblade Chronicle 2',
        image: images("./XenobladeChronicles2.jpg"),
        description: 'Xenoblade Chronicles 2, conocido como Xenoblade 2 en Japón, es un videojuego de rol que ha sido desarrollado por Monolith Soft y publicado por Nintendo para la consola de videojuegos Nintendo Switch. Es parte de la serie Xeno, específicamente como una secuela del primer Xenoblade Chronicles, y fue lanzado mundialmente el 1 de diciembre de 2017.',
    }],
    ["Stardew Valley", {
        name: 'Stardew Valley',
        image: images("./strardewvalley.jpg"),
        description: 'Stardew Valley es un RPG de vida en el campo! Hereda la vieja granja de tu abuelo en Stardew Valley. Armado con herramientas de segunda mano y algo de dinero, te dispones a empezar tu nueva vida. ¿Podrás aprender a vivir de la tierra y a convertir esos campos de malezas en un hogar próspero? No va a ser fácil. Fue disenyado por Eric Barone y se estreno el 26 de febrero del 2016.',
    }],
    ["NieR: Automata", {
        name: 'NieR: Automata',
        image: images("./nierautomata.png"),
        description: 'NieR:Automata (ニーア オートマタ Nīa Ōtomata) es un videojuego de rol de acción desarrollado por PlatinumGames y publicado por Square Enix para PlayStation 4, Microsoft Windows y Xbox One, así como para Nintendo Switch. Aunque en un principio la distribuidora planeó su lanzamiento para noviembre de 2016, finalmente lo publicó el 23 de febrero de 2017 en Japón.',
    }]
]);

export default {
    name: 'App',
    components: {
        ComponentHeader,
        ComponentNav,
        ComponentAside,
        ComponentFooter,
        ComponentRanking,
        ComponentMain,
    },
    data() {
        return {
            games: new Map(),
        }
    },
    computed: {
        allGames() {
            return Array.from(this.games.values());
        },
    },
    methods: {
        deleteGame(gamename) {
            this.games.delete(gamename);
            this.updateLocalStorage();
        },
        updateLocalStorage() {
            localStorage.setItem("games", JSON.stringify(Array.from(this.games.entries())));
        },
        addGame(game) {
            let tempgame = {
                name: game.name,
                image: game.image,
                description: game.description,
            }
            this.games.set(game.name, tempgame);
            this.updateLocalStorage();
            alert("Juego añadido correctamente");
        },
        modifyObject(game) {
            if (game.oldname !== game.name) {
                let tempgame = this.games.get(game.oldname);
                tempgame.name = game.name;
                if (game.image !== "") {
                    tempgame.image = game.image;
                }
                if (tempgame.description !== game.description) {
                    tempgame.description = game.description;
                }
                this.games.delete(game.oldname);
                this.games.set(game.name, tempgame);
            }
            else {
                let tempgame = this.games.get(game.name);
                if (game.image !== "") {
                    tempgame.image = game.image;
                }
                if (tempgame.description !== game.description) {
                    tempgame.description = game.description;
                }
                this.games.set(game.name, tempgame);
            }
            this.updateLocalStorage();
        },
    },
    mounted() {
        // Miro si hay juegos en el localStorage y si no los hay pongo unos por defecto
        if (localStorage.getItem("games")) {
            try {
                this.games = new Map(JSON.parse(localStorage.getItem("games")));
                if (this.games.size === 0) {
                    localStorage.setItem("games", JSON.stringify(Array.from(defaultgames.entries())));
                    this.games = new Map(JSON.parse(localStorage.getItem("games")));
                }
            }
            catch (e) {
                console.log(e);
                localStorage.removeItem("games");
            }
        } else {
            localStorage.setItem("games", JSON.stringify(Array.from(defaultgames.entries())));
            this.games = new Map(JSON.parse(localStorage.getItem("games")));
        }
    },
}
</script>

<style>
:root {
    --naranja: #ffc045;
    --azul: #0a91ab;
    --negro: #000000;
    --gris: #8A8070;
    --blanco: #ffffff;
}

body {
    padding: 0%;
    margin: 0%;
    border: 0px;
}

header {
    background-color: var(--azul);
    color: var(--naranja);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

h1 {
    margin-bottom: 0rem;
    text-transform: uppercase;
}

nav {
    background-color: var(--naranja);
    padding: 0.2%;
    top: 0px;
    position: sticky;
}

.nava {
    text-decoration: none;
    color: var(--negro);
    text-transform: uppercase;
    font-weight: bold;
}

.nava:hover {
    background-color: #0a90ab9c;
}

.navul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    padding-left: 0px;
}

.ralla {
    border: 2px solid var(--naranja);
    width: 8%;
    margin-bottom: 1%;
    margin-top: 1%;
}

.imgmenu {
    height: 100px;
    width: 100px;
    margin-bottom: 1%;
}

.menu {
    text-align: center;
    margin: 1rem;
}

#Videojuegos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.grid {
    width: 80%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    justify-content: space-around;
}

.divVideojocs {
    display: flex;
    justify-content: center;
    width: 100%;
}

article.articleVideojocs {
    width: 400px;
    height: auto;
    border: 2px solid var(--naranja);
    border-radius: 10px;
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

img.articleVideojocs {
    width: 400px;
    height: 200px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.h2videojocs {
    color: var(--azul);
    text-transform: uppercase;
    width: 100%;
    margin-left: 2rem;
}

.h3videojocs {
    color: var(--naranja);
    margin-top: 0%;
    margin-left: 1%;
    margin-bottom: 0%;
    width: 100%;
    text-align: center;
}

.pvideojocs {
    color: var(--gris);
    margin-top: 0%;
    margin-left: 1.5%;
    margin-bottom: 2%;
    width: 100%;
    text-align: justify;
    padding: 0.5rem;
}

.avideojocs {
    text-decoration: none;
    color: var(--negro);
    font-weight: bold;
    border: 1px solid var(--naranja);
    background-color: var(--naranja);
    border-radius: 5px;
    padding: 0.2rem 0.1rem;
    align-self: flex-end;
    margin: 0.5rem;
}

.divavideojocs {
    display: flex;
    margin-left: 20rem;
}

.divAsideITrucos {
    display: flex;
}

#asidepagprincipal {
    order: 2;
}

#Trucos {
    width: 25%;
    background-color: #0a90ab61;
    margin-right: 1rem;
}

.h2Trucos {
    color: var(--azul);
    margin-bottom: 1rem;
    text-align: center;
    text-transform: uppercase;
}

.h2Noticias {
    color: var(--azul);
    margin-bottom: 1rem;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
}

.trucosul {
    list-style-type: none;
}

.trucosa {
    text-decoration: none;
    color: var(--azul);
    text-transform: capitalize;
    font-weight: bold;
}

.trucosli {
    margin-bottom: 1rem;
}

#Noticias {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.divnoticias {
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.imgnoticias {
    width: 500px;
    height: 300px;
}

.articlenoticias {
    width: 500px;
    height: 450px;
    margin-right: 2rem;
    margin-left: 3rem;
    display: flex;
    flex-direction: column;
}

.h3noticias {
    color: var(--naranja);
    margin-bottom: 0%;
}

.pnoticias {
    color: var(--gris);
    margin-top: 1%;
}

.divanoticias {
    background-color: var(--naranja);
    border: 1px solid var(--naranja);
    border-radius: 4px;
    text-align: end;
    padding: 0.2rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    margin-bottom: 0.3rem;
    position: relative;
    top: -32px;
}

.anoticias {
    color: rgb(70, 0, 123);
    text-decoration: none;
    font-weight: bold;
}

.anoticias:hover {
    font-size: large;
}

#Ranking {
    margin-top: 0%;
    background-color: #8A8070;
    padding-bottom: 1rem;
}

.h2ranking {
    color: var(--naranja);
    padding-top: 0.5rem;
    text-align: center;
    text-transform: uppercase;
    margin-top: 0%;
}

.imgranking {
    height: 128px;
    width: 128px;
    border-radius: 128px;
    margin-left: 35px;
}

.divranking {
    display: flex;
    justify-content: space-around;

}

.articleranking {
    width: 200px;
}

.h3ranking {
    text-align: center;
}

.pranking {
    text-align: center;
    margin: 0.2rem;
}

.imgfooter {
    width: 32px;
    height: 32px;
}

.footer {
    border-top: 2px solid var(--negro);
    padding-top: 0.5rem;
    display: flex;
    justify-content: space-around;
}
</style>
