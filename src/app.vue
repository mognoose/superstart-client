<template>
    <div>
        <DeskTop :games="games" />
        <TaskBar @start="onStart()" />
        <StartMenu v-if="start"/>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            games: [],
            start: false,
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