<template>
  <div>
     <v-navbar>
     </v-navbar>
    <main class="main">
      <div class="container main__content">
        <div class="main__text">
          <h1>Суши и Рамен на ваш вкус!</h1>
          <p>
            Сдесь вы сможете попробовать возможно самые вкусные суши и самый чудесный рамен в своем городе.
          </p>
          <p>
            Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: постоянный количественный рост и сфера нашей активности играет определяющее значение.
          </p>
          <router-link class="main__btn" to="/range">Заказать <img src="@/assets/arrow-btn.svg" alt="arrow-image"></router-link>
        </div>
        <div class="main__image">
          <img src="@/assets/shushi.png" alt="sushi-image">
        </div>
      </div>
    </main>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VNavbar from "@/components/VNavbar";
import VFooter from "@/components/VFooter";
export default {
  components: {VFooter, VNavbar}
}
</script>

<style>

.container{
  padding: 0 120px;
}


.main{
  padding: 50px 0;
  /*height: calc(100vh - 105px);*/
  background-color: #555554;
  background-image: url('@/assets/mask-bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
.main__content{
  display: flex;
  align-items: center;
  color: #fff;

}
.main__text,
.main__image{
  flex: 0 1 50%;
}
.main__text p{
  margin: 0;
}
.main__text p + p{
  margin-top: 30px;
}
.main__text h1{
  font-size: 40px;
  margin: 0 0 50px 0;
}
.main__image img{
  width: 100%;
}
.main__btn{
  display: flex;
  width: max-content;
  text-decoration: none;
  align-items: center;
  gap: 8px;
  border: none;
  color: #fff;
  font-weight: 700;
  background: linear-gradient(to left, #C74C4C, #D38181);
  padding: 13px 44px;
  margin-top: 54px;
  cursor: pointer;
  border-radius: 20px;
  font-size: 24px;
}
</style>