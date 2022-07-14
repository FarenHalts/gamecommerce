<template>
<div class="home-page">
    <div class="home-page__exposure">
        <div class="home-page__exposure-header">
            <span class="home-page__title">Games</span>
            <select name="games" id="games">
                <option value="score">Mais populares</option>
                <option value="price">Preço</option>
                <option value="asc">Ordem Alfabética</option>
            </select>
        </div>
        <div class="home-page__exposure-games">
            <game-box v-for="item in allGames" :key="item.id" :game-information="item" @add-to-cart="addGameToCart" />
        </div>
    </div>
    <cart />
</div>
</template>

<script>
import GameImage from '@/components/GameImage.vue'
import GameBox from '@/components/GameBox.vue'
import Cart from '@/components/Cart.vue'
import IconCartEmpty from '@/assets/icons/icon-cart-empty.vue'

export default {
    name: 'HomeView',
    components: {
        GameImage,
        GameBox,
        Cart,
        IconCartEmpty,
    },
    data() {
        return {
            allGames: []
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
    // grid-template-rows: 325px;
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
            margin: 13px 0px;
            padding: 10px 18px;
            border: 1px solid $gray;
            border-radius: 4px;
            width: 260px;
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
    }
}
</style>
