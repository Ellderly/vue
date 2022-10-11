<template>
  <div class="footer-wrapper">
    <div class="container footer">
      <ul class="list__footer">
        <li v-for="item in footerL">
          <a href="#"> {{ item.name }}</a>
        </li>
      </ul>
      <div class="footer__contact">
        <div class="footer__contact-block">
          <p>Телефон</p>
          <div class="line"></div>
          <h4>+380930000000</h4>
        </div>
        <div class="footer__contact-block">
          <p>Почта</p>
          <div class="line"></div>
          <h4>OPS@gmail.com</h4>
        </div>
      </div>
      <div class="footer__doc">
        <div class="footer__doc-logo">
          <img src="@/assets/full-logo.png" alt="logo-image">
        </div>
          <p>© 2022, sushiram</p>
          <a href="#" class="footer__doc-politic">Политика конфиденциальности</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-footer",

  data(){
    return{
      footerL: [
        {name: 'О доставке'},
        {name: 'F.A.Q.'},
        {name: 'Поддержка'},
        {name: 'Вакансии курьера'}
      ]
    }
  }
}
</script>

<style scoped>
.footer-wrapper{
  background: #1B1B1B;
  padding: 13px 0;
}
.footer{
  display: flex;
  gap: 30px;
  align-items: center;
  color: #fff;
}
.list__footer{
  list-style: none;
  line-height: 160%;
  flex: 1 1 auto;
}
.list__footer li a{
  color: #fff;
  text-decoration: none;
  transition: .2s;
  position: relative;
}
.list__footer li a:hover {
  color: #a48787;
}
.footer__contact{
  display: flex;
  gap: 30px
}
.footer__contact-block{
  text-align: center;
}
.footer__contact-block p,
.footer__contact-block h4 {
  margin: 0;
}
.footer__contact-block h4 {
font-weight: 500;
}
.footer__contact-block .line {
  width: 45px;
  height: 3px;
  background: #AA3939;
  border-radius: 12px;
  margin: 8px auto;
}
.footer__doc{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.footer__doc p{
  margin: 0;
}
.footer__doc-politic{
  color: #AA3939;
  text-decoration: none;
  transition: .2s;
}
.footer__doc-politic:hover{
  color: #ab8d8d;
}
</style>