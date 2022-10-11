<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style >
*{
  box-sizing: border-box;
}
*:focus{
  outline: none;
}
body{
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}
ul{
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>