/* __placeholder__ */
export default (await import('vue')).defineComponent({
props: ['games'],
data() {
return {
search: '',
selected: 0,
};
},
mounted() {
this.$refs.overlaysearch.focus();
},
methods: {
execute(e) {
this.$emit('openGame', this.games.filter(game => game.name.toUpperCase().includes(this.search.toUpperCase()))[this.selected].name);
},
select(direction) {
if (direction === 'up' && this.selected > 0) {
this.selected--;
}
if (direction === 'down') {
if (this.games.filter(game => game.name.toUpperCase().includes(this.search.toUpperCase())).length - 1 > this.selected) {
this.selected++;
}
}
}
},
});
