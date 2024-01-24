import { defineStore } from 'pinia'

export const useCustomisationsStore = defineStore('customisations', {
    state: () => ({
        background: '',
        theme: {},
    }),
    getters: {
        getBackground: (state) => state.background,
    },
    actions: {
        loadBackground() {
            console.log('loading background');
            this.background = JSON.parse(localStorage.getItem('background'));
        },
        setBackground(background) {
            this.background = background;
            localStorage.setItem('background', JSON.stringify(this.background));
        },
        removeBackground() {
            this.background = '';
            localStorage.setItem('background', JSON.stringify(this.background));

        },
    },
})