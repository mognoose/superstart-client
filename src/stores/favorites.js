import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
    state: () => ({
        favorites: [],
    }),
    getters: {
        getFavorites: (state) => state.favorites,
    },
    actions: {
        loadFavorites() {
            console.log('loading favorites');
            this.favorites = JSON.parse(localStorage.getItem('favorites'));
        },
        setFavorites(favorites) {
            this.favorites = favorites;
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
        },
        addFavorite(game) {
            this.favorites.push(game);
            localStorage.setItem('favorites', JSON.stringify(this.favorites));

        },
        removeFavorite(game) {
            this.favorites = this.favorites.filter(favorite => favorite !== game);
            localStorage.setItem('favorites', JSON.stringify(this.favorites));

        },
    },
})