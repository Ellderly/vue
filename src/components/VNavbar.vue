<template>
  <div class="navbar-wrapper">
    <div class="container navbar">
      <a href='/' class="logo">
        <img src="@/assets/full-logo.png" alt="logo-image">
      </a>
      <ul class="navbar__list">
        <li class="navbar__list-item" v-for="item in navItems" :key="item.id">
          <router-link :class="{
            'active': currentRoute === item.router
          }" :to='{path:item.router}'> {{ item.name }}</router-link>
        </li>
      </ul>
      <div
          class="basket">
        <div  class="basket__price">
          {{ $store.state.newProductPrice }} грн.
        </div>
        <div @click="showPopUp" class="basket__images">
          <div v-if="$store.state.newProductList.length !== 0" class="basket__items">
            {{ $store.state.newProductList.length }}
          </div>
          <div class="basket-image">
            <img src="@/assets/basket.svg" alt="basket">
          </div>
        </div>
        <div
            class="popUpBasket"
            v-if="popUpBasket"
        >
          <h3 class="basket__title">КОРЗИНА</h3>
          <div class="popUpBasket__product-wrapper" v-for="popUpItem in $store.state.newProductList">
               <div class="popUpBasket__product" v-if="popUpItem.amount > 0">
                <div class="popUpBasket__logo">
                  <img :src=popUpItem.image alt="image-logo">
                </div>
                <div class="popUpBasket__text">
                  <h5 class="popUpBasket__text-name">{{ popUpItem.name }}</h5>
                  <a class="popUpBasket__text-more" href="#">подробнее</a>
                </div>
                <div class="popUpBasket__amount">
                  <div @click="plusAmount(popUpItem)"  class="sign sign-plus"></div>
                  {{popUpItem.amount}}
                  <div @click="minusAmount(popUpItem)" class="sign sign-minus"></div>
                </div>
                <span class="popUp-numWeight">{{popUpItem.weight}} грамм</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-navbar",


  data() {
    return{
      navItems: [
        {name: 'Главная', router: '/', id: '1'},
        {name: 'Асортимент', router: '/range', id: '2'},
        {name: 'О сервисе', router: '/about', id: '3'},
        {name: 'Контакты', router: '/contact', id: '4'}
      ],
      currentRoute: window.location.pathname,

      popUpBasket: false,

    }
  },
  methods: {
    showPopUp() {
      this.popUpBasket = !this.popUpBasket
    },
    plusAmount(item) {
      this.$store.state.newProductPrice += item.price
      item.amount += 1
      localStorage.setItem('selectPrice', JSON.stringify(this.$store.state.newProductPrice))
    },
    minusAmount(item) {
      this.$store.state.newProductPrice -= item.price
      item.amount -= 1
      localStorage.setItem('selectPrice', JSON.stringify(this.$store.state.newProductPrice))

    }
  },

  mounted() {
    if (localStorage.result) {
      this.$store.state.newProductPrice = +(JSON.parse(localStorage.getItem('result')));
    }
    if (localStorage.productListItems) {
      this.$store.state.newProductList = JSON.parse(localStorage.getItem('productListItems'));
    }
    if (localStorage.selectPrice) {
      this.$store.state.newProductPrice = JSON.parse(localStorage.getItem('selectPrice'));
    }
  },
}
</script>

<style scoped>
.navbar-wrapper{
  background: #1B1B1B;
  padding: 13px 0;
}
.navbar{
  display: flex;
  align-items: center;
  gap: 30px;
}
.logo{
  flex: 0 1 250px
}
.navbar__list{
  display: flex;
  gap: 60px;
  list-style: none;
  flex: 1 1 auto;
}
.navbar__list-item a{
  color: #fff;
  text-decoration: none;
  transition: .2s;
  position: relative;
}
.navbar__list-item a:hover {
  color: #a48787;
}
.basket{
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fff;
  gap: 5px;
  text-decoration: none;
  position: relative;
}
.basket__images{
  position: relative;
}
.basket__items{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: -5px;
  top: -5px;
  border-radius: 100%;
  background: #fff;
  width: 20px;
  color: #000;
  font-size: 12px;
  font-weight: 500;
  height: 20px;
}
.basket-image{
  padding: 10px;
  width: 41px;
  height: 41px;
  background: #AA3939;
  border-radius: 100%;
}
.basket img{
  height: 100%;
  width: 100%
}
.basket__title{
  font-size: 20px;
  font-weight: 500;
}
.active{
  font-weight: 600;
}
.active:after{
  content: '';
  width: 70%;
  height: 3px;
  background: #AA3939;
  position: absolute;
  left: 15%;
  bottom: -8px;
  transition: .2s;
}
.active:hover:after{
  transform: scale(0);
}
.popUpBasket{
  display: flex;
  gap: 10px;
  width: 520px;
  flex-direction: column;
  /*align-items: center;*/
  text-align: center;
  position: absolute;
  right: 0;
  top: 100%;
  padding: 16px 14px;
  border-radius: 20px;
  background: #fff;
  color: #000;
}
.popUpBasket__product{
  display: flex;
  gap: 15px;
  align-items: center;
  box-shadow: 0 5px 10px #d9d9d9;
  position: relative;
  border-radius: 10px;
  padding: 15px;
}
.popUpBasket__logo{
  width: 175px;
  border-radius: 10px;
  overflow: hidden;
}
.popUpBasket__text{
  display: flex;
  flex-direction: column;
}
.popUpBasket__text-name{
  flex: 1 1 auto;
  font-size: 18px;
}
.popUpBasket__text-more{
  margin-bottom: 10px;
  color: #AA3939;
}
.popUp-numWeight{
  position: absolute;
  right: 10px;
  bottom: 10px;
}
.popUpBasket__amount{
  display: flex;
  align-items: center;
  gap: 10px;
}
.popUpBasket__amount .sign{
  width: 28px;
  height: 28px;
  background: #AA3939;
  border-radius: 100%;
  position: relative;
  transition: .2s;
}
.popUpBasket__amount .sign:hover{
  background: #ab8d8d;
}
.popUpBasket__amount .sign-plus:before,
.popUpBasket__amount .sign-minus:before,
.popUpBasket__amount .sign-plus:after{
  content: '';
  position: absolute;
  width: 15px;
  height: 4px;
  left: calc(50% - 7.5px);
  top: calc(50% - 2px);
  background: #fff;
  border-radius: 10px;
}
.popUpBasket__amount .sign-plus:after{
  transform: rotate(90deg);
}

</style>