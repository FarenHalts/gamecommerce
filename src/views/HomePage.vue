<template>
  <div class="home-page">
    <div class="home-page__exposure">
      <div class="home-page__exposure-header">
        <span class="home-page__title">Games</span>
        <select name="cars" id="cars">
          <option value="score">Mais populares</option>
          <option value="price">Preço</option>
          <option value="asc">Ordem Alfabética</option>
        </select>
      </div>
      <div class="home-page__exposure-games">
        <div v-for="item in allGames" :key="item.id">
          <game-image :image="item.image" />
        </div>
      </div>
    </div>

    <div class="home-page__cart">
      <span class="home-page__cart-title">Carrinho</span>

      <div class="home-page__empty-cart">
        <icon-cart-empty />
        <span>Até o momento, <br> o seu carrinho está vazio</span>
      </div>
    </div>
  </div>
</template>

<script>
import GameImage from '@/components/GameImage.vue'
import IconCartEmpty from '@/assets/icons/icon-cart-empty.vue'

export default {
  name: 'HomeView',
  components: {
    GameImage,
    IconCartEmpty
  },
  data() {
    return{
      allGames: []
    }
  },
  created(){
    this.getGameData()
  },
  methods: {
    getGameData(){
      this.allGames = require('../mock/products.json');
      console.log(this.allGames);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';

.home-page{
  margin: 55px 70px;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1.5fr 0.5fr;
  grid-template-rows: 325px;
  // grid-template-rows: 1fr 1fr;
  gap: 0 40px;
  grid-template-areas:
    "Exposure Cart"
    "Exposure .";

  &__exposure{
    grid-area: Exposure;
  }

  &__exposure-header{
    display: flex;
    justify-content: space-between;
    margin-bottom: 44px;

    select{
      margin: 13px 0px;
      padding: 10px 18px;
      border: 1px solid $gray;
      border-radius: 4px;
      width: 260px;
    }
  }

  &__exposure-games{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 30px 30px;
  }

  &__title{
    font-weight: $bold;
    font-size: 48px;
    color: $black;
  }

  &__cart{
    grid-area: Cart;
    padding: 20px;
    border: 1px solid $gray;
    border-radius: 4px;
  }

  &__cart-title{
    font-size: 18px;
    font-weight: $bold;
  }

  &__empty-cart{
    display: flex;
    gap: 18px;
    margin: 55px 0 80px;
    flex-direction: column;
    place-items: center;
    text-align: center;
    color: $smokey-grey;
    font-size: 14px;
    line-height: 19px;
  }
}
</style>
