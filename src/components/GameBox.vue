<template>
<div @click="emitGameToCart" class="game-box">
    <game-image :game-image="gameInformation.image" :game-name="gameInformation.name" />
    <div class="game-box__name">
        {{ gameInformation.name }}
    </div>
    <div class="game-box__price">R$ {{ gameInformation.price }}</div>
    <div class="game-box__cart-add">adicionar ao carrinho</div>
</div>
</template>

<script>
import GameImage from '@/components/GameImage.vue';

export default {
    name: "GameBox",
    components: {
        GameImage
    },
    props: {
        gameInformation: {
            type: Object,
            required: true,
        },
    },
    methods: {
        emitGameToCart() {
            this.$emit('add-to-cart', this.gameInformation)
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/variables.scss";

.game-box {
    cursor: pointer;

    &:hover {

        .game-box__name,
        .game-box__price {
            display: none;
        }

        .game-box__cart-add {
            display: flex;
        }
    }

    &__name {
        margin-top: 10px;
        color: $smokey-grey;
        text-align: center;
        font-size: 16px;
        line-height: 22px;
    }

    &__price {
        margin-top: 2px;
        text-align: center;
        color: $cyan-blue;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
    }

    &__cart-add {
        display: none;
        color: $cyan-blue;
        font-weight: bold;
        margin-top: 23px;
        font-size: 16px;
        line-height: 22px;
        justify-content: center;
    }
}
</style>
