<template>
  <nav>
    <div class="logo">Bloggging</div>
    <div class="menu">
      <router-link to="/new" v-slot="{ href,  navigate }">
        <a :href="href" @click="navigate" class="btn">Write Blog</a>
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  padding: 16px;
  background-color: #000000;
  color: #ffffff;
  align-items: center;
}

nav .logo {
  font-weight: 700;
}

nav .menu {
  margin-left: auto;
}

nav .btn {
  display: inline-block;
  text-align: center;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 4px;
  color: #ffffff;
  padding: 4px 10px;
  cursor: pointer;
  text-decoration: none;;
}
</style>