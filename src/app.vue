<template>
    <div>
        <DeskTop
            :games="favorites"
            @open-game="game => onOpenGame(game)"
        />
        <TaskBar
            @start="onStart()"
        />
        <GameLauncher
            v-if="game"
            :game="game" @close="onCloseGame()"
            @addToDesktop="game => onAddToDesktop(game)"
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

export default {
    data() {
        return {
            games: [],
            start: false,
            game: "",
        }
    },
    computed: {
        favorites() {
            const favorites = JSON.parse(localStorage.getItem('favorites'));
            return this.games.filter(game => favorites.includes(game.name))
        }
    },
    mounted() {
        this.getGames();
    },
    methods: {
        async getGames() {
            const res = await axios.get('http://localhost:8080/api/games');
            this.games = res.data;
        },
        onStart() {
            this.start = !this.start;
        },
        onAddToDesktop(game) {
            let favorites = JSON.parse(localStorage.getItem('favorites'));
            if(!favorites) favorites = []

            favorites.push(game)

            console.log('game', game);
            console.log('favorites', favorites);
            

            localStorage.setItem('favorites', JSON.stringify(favorites));
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