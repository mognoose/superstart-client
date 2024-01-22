<template>
    <div class="game-launcher" ref="gamelauncher">
        <div class="header">
            <img :src="game.icon ? game.icon : 'icons/default.png'" :alt="game.name" />
            <p>{{ game.name }}</p>
            <button @click="$emit('close')">x</button>
        </div>
        <div class="content">
            <div class="info">
                <pre>{{ game }}</pre>
            </div>
        </div>
        <div class="footer">
            <div>
                <a :href="`http://localhost:8080/download/${game.metadata.folder}/${game.files[0]}`" target="_Blank">Download</a>
            </div>
            <div>
                <span v-if="favorites.includes(game.name)" @click="removeFavorite(game.name)">Remove from Desktop</span>
                <span v-else @click="addFavorite(game.name)">Add to Desktop</span>
            </div>
        </div>
    </div>
</template>

<script>
import { useFavoritesStore } from '@/stores/favorites'

export default {
    props: ['game'],
    setup() {
        const store = useFavoritesStore()
        const { addFavorite } = store
        const { removeFavorite } = store
        const favorites = computed(() => store.favorites)
        return { addFavorite, removeFavorite, favorites }
    },
    mounted () {
        nextTick(() => {
            this.setBackground();
        })
    },
    updated () {
        this.setBackground();
    },
    methods: {
        setBackground() {
            const gamelauncher = this.$refs['gamelauncher'];
            if(this.game.metadata.images.length > 0) {
                gamelauncher.style.backgroundImage = `url("http://localhost:8080/download/${this.game.metadata.folder}/images/${this.game.metadata.images[0]}")`;
            } else gamelauncher.style.backgroundImage = '';
        }
    },
}
</script>

<style lang="scss">
.game-launcher {
    position: absolute;
    top: 5vh;
    left: 10vw;
    background-color: gray;
    height: 80vh;
    height: 80dvh;
    width: 80vw;
    width: 80dvw;
    background-repeat: no-repeat;
    background-size: cover;

    display: grid;
    grid-template-rows: 2rem 10fr 1fr;
    grid-template-columns: 1fr;

    .header {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        border-bottom: 2px solid rgba(0,0,0,0.25);
        background-color: rgba(0,0,0,0.25);
        backdrop-filter: blur(20px);

        img {
            justify-self: left;
            height: 1.3rem;
            width: 1.3rem;
            margin: .25rem;
        }
        p {
            padding: 0;
            margin: 6px;
            height: .125rem;
            color: #fff;
            font-weight: 800;
            
        }
        button {
            justify-self: right;
            height: 1.3rem;
            width: 1.3rem;
            margin: .25rem;
        }
    }

    .content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr auto;
        overflow: auto;
        bottom: 0;

        .info {
            box-sizing: border-box;
            padding: 1rem;
            margin: 1rem;
            grid-row-start: 2;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(20px);
            color: white;
        }

    }

    .footer {
        background-color: rgba(0,0,0,0.25);
        backdrop-filter: blur(20px);
        display: flex;

        div {
            padding: 2rem;

            span,
            a:link {
                text-decoration: none;
                font-weight: 800;

                padding: .75rem;
                border: 2px solid lightskyblue;
                border-radius: 4px;
                color: darkslategrey;
                background-color: skyblue;
            }
        }
    }

}
</style>