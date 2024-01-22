<template>
    <div>
        <DeskTop
            :games="games"
            @open-game="game => onOpenGame(game)"
        />
        <TaskBar
            @start="onStart()"
        />
        <GameLauncher
            v-if="game"
            :game="game" @close="onCloseGame()"
        />
        <StartMenu
            v-if="start"
            :games="games"
            @open-game="game => onOpenGame(game)"
        />
    </div>
</template>

<script>
import axios from 'axios';
import { useFavoritesStore } from '@/stores/favorites'

export default {
    setup() {
        const store = useFavoritesStore()
        const { addFavorite } = store
        const { removeFavorite } = store
        const { setFavorites } = store
        const { loadFavorites } = store
        const favorites = computed(() => store.favorites)
        return { addFavorite, removeFavorite, favorites, setFavorites, loadFavorites }
    },
    data() {
        return {
            games: [],
            start: false,
            game: "",
        }
    },
    mounted() {
        this.getGames();
        this.loadFavorites();
    },
    methods: {
        async getGames() {
            const res = await axios.get('http://localhost:8080/api/games');
            this.games = res.data;
        },
        onStart() {
            this.start = !this.start;
        },
        onOpenGame(gameName) {
            this.start = false;
            const game = this.games.find(game => game.name === gameName)
            this.game = game;
        },
        onCloseGame() {
            this.game = null;
        }
    },
}
</script>

<style>
html
body {
    padding: 0;
    margin: 0;
}
</style>