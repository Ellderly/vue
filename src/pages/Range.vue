<template>
  <div>
    <v-navbar/>
    <section class="filter">
    <div class="container">
      <ul class="filter__list">
        <li class="filter__item" v-for="item in filterNameList" :key="item.id">
          <button @click="getFilter(item.id)" :class="{ active: item.id === active }" class="filter__item-btn">{{ item.name }}</button>
        </li>
      </ul>
    </div>
    </section>
    <section class="product">
      <div class="container">
        <ul class="product__list">
          <li class="product__item" v-for="(item, idx) in $store.state.productListTest" :key="item.id">
            <div class="product__image">
              <img :src=item.image alt="image">
            </div>
            <h5> {{ item.name }} </h5>
            <p> {{ item.text }} </p>
            <div class="product__price">
              <div class="product__weight">
                <span  v-if="item.price !== ''"> {{item.price}} грн </span>
                <span ref="price" :class="['numWeight', {
                  activeWeight: item.price !== '',
                }]"> {{item.weight}} грамм </span>
              </div>
              <button @click="calcPrice(item)" class="product-buy">Заказать</button>

            </div>
          </li>
        </ul>
      </div>
    </section>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VNavbar from "@/components/VNavbar";
import VFooter from "@/components/VFooter";


export default {
  components: {VFooter, VNavbar},

  data(){
    return{
      filterNameList: [
        {name: 'Суши бар', id: 1},
        {name: 'Супы', id: 2},
        {name: 'Салаты и Закуски', id: 3},
        {name: 'Десерты', id: 4},
        {name: 'Напитки', id: 5},
        {name: 'Горячие блюда и гарниры', id: 6},
        {name: 'Пица и бургеры', id: 7},
      ],

      active: this.id = 1,


    }
  },
  methods: {

    calcPrice(item) {
      this.$store.state.newProductPrice += item.price
      localStorage.setItem('result', JSON.stringify(this.$store.state.newProductPrice))

      this.$store.state.newProductList.push(item)
      localStorage.setItem('productListItems', JSON.stringify(this.$store.state.newProductList))


    },
    getFilter(id){
      this.active = id


      // this.$store.state.productListTest.filter(filterId => {
      // if(id === filterId.filterName) {
      //   return this.$store.state.productListTest.push(filterId)
      // }
      // })
    }
  },

}
</script>

<style scoped>

.filter{
  background: #AA3939;
  padding: 22px 0;
}
.filter__list{
  display: flex;
  gap: 15px;
}
.filter__item-btn{
  color: #fff;
  transition: .2s;
  border: 1px solid #fff;
  padding: 7px 16px;
  cursor: pointer;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  background: none;
}
.active{
  color: #AA3939;
  background: #fff;
}

.product{
  padding: 38px 0 68px;
}
.product h5{
  font-size: 16px;
  margin: 12px 0 11px;
}
.product p {
  font-size: 12px;
  margin: 0;
  font-weight: 500;
}
.product__list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
}
.product__item{
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 16px 20px;
  border-radius: 20px;
  cursor: default;
  text-align: center;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4);
}
.product__image img{
  width: 100%;
}
.product__price{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 40px auto 0;
}
.product__weight{
  display: flex;
  flex-direction: column;
}
.product__weight{
  font-weight: 500;
}
.product__weight .numWeight{
  font-size: 13px;
}
.product__weight .activeWeight{
  color: #AA3939;
}
.product-buy{
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 7px 16px;
  border-radius: 10px;
  background: #AA3939;
  transition: .2s;
}
.product-buy:hover{
  background: #fff;
  color: #AA3939;
  border: 1px solid #AA3939;
}
</style>