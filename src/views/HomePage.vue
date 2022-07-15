<template>
<div class="home-page">
    <div class="home-page__exposure">
        <div class="home-page__exposure-header">
            <h1 class="home-page__title">Games</h1>
            <select name="games" id="games" v-model="filter">
                <option value="score">Mais populares</option>
                <option value="price">Preço</option>
                <option value="name">Ordem Alfabética</option>
            </select>
        </div>
        <div class="home-page__exposure-games">
            <game-box v-for="item in sortedArray" :key="item.id" :game-information="item" @add-to-cart="addGameToCart" />
        </div>
    </div>
    <cart />
</div>
</template>

<script>
import GameBox from '@/components/GameBox.vue'
import Cart from '@/components/Cart.vue'

export default {
    name: 'HomeView',
    components: {
        GameBox,
        Cart
    },
    data() {
        return {
            allGames: [],
            filter: 'score'
        }
    },
    created() {
        this.getGameData()
    },
    methods: {
        getGameData() {
            this.allGames = require('../mock/products.json');
        },
        addGameToCart(game) {
            this.$store.dispatch('inCartGames', game)
        }
    },
    computed: {
        sortedArray: function () {
            if (this.filter == "name") {
                function compare(a, b) {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                }
                return this.allGames.sort(compare);
            } else if (this.filter == "price") {
                function compare(a, b) {
                    if (a.price < b.price) return -1;
                    if (a.price > b.price) return 1;
                    return 0;
                }
                return this.allGames.sort(compare);
            } else if (this.filter == "score") {
                function compare(a, b) {
                    if (a.score < b.score) return -1;
                    if (a.score > b.score) return 1;
                    return 0;
                }
                return this.allGames.sort(compare);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';

.home-page {
    margin: 55px 70px;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1.5fr 0.5fr;
    grid-template-rows: 0.5fr 1fr;
    gap: 0 40px;
    grid-template-areas:
        "Exposure Cart"
        "Exposure .";

    &__exposure {
        grid-area: Exposure;
    }

    &__exposure-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 44px;

        select {
            padding: 10px 18px;
            cursor: pointer;
            border: 1px solid $gray;
            border-radius: 4px;
            width: 260px;
            height: 40px;
            background-image: url("../assets/icons/arrow-down-icon.svg");
            background-repeat: no-repeat;
            background-position-x: 95%;
            background-position-y: 16px;

            &:focus{
                outline: none;
            }
        }
    }

    &__exposure-games {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 30px 30px;
    }

    &__title {
        font-weight: $bold;
        font-size: 48px;
        color: $black;
        line-height: 45px;
    }
}
</style>
