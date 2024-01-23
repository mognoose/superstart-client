<template>
    <div>
        <DeskTop
            :games="games"
            @open-game="game => onOpenGame(game)"
            @click="closeStart()"
        />
        <TaskBar
            @start="onStart()"
        />
        <GameLauncher
            v-if="game"
            :game="game" @close="onCloseGame()"
            @click="closeStart()"
        />
        <StartMenu
            ref="startmenu"
            v-if="start"
            :games="games"
            @open-game="game => onOpenGame(game)"
            @close-start="closeStart()"
        />
        <SearchOverlay v-if="overlay" :games="games" @open-game="game => onOpenGame(game)" />
        <keyboard-events @keydown="keyboardEvent" />
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
            overlay: false,
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
        onOverlay() {
            this.overlay = !this.overlay;
        },
        onStart() {
            this.start = !this.start;
        },
        closeStart() {
            this.start = false;
            this.overlay = false;
        },
        onOpenGame(gameName) {
            this.closeStart();
            const game = this.games.find(game => game.name === gameName)
            this.game = game;
        },
        onCloseGame() {
            this.game = null;
        },
        keyboardEvent(e) {
            console.log('keyboard event detected: ', e.which);
            if (e.keyCode == 75 && e.ctrlKey) this.onOverlay();
            if(e.which === 91) this.onStart();
            if(e.which === 27) this.closeStart();
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