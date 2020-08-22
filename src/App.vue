<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@400;700&display=swap');
html {
  font-family: 'Overpass Mono', monospace, sans-serif;
  font-weight: 400;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
}
button, input {
  font-family: 'Overpass Mono', monospace, sans-serif;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
a {
  color: #ec635a;
  text-decoration: none;
}
.breadcrumb {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 5px 16px;
  border-bottom: 1px solid #dddddd;
}

.breadcrumb .inactive-link {
  display: inline-block;
  max-width: 700px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}

@media (max-width: 900px) {
  .breadcrumb .inactive-link {
    display: none;
  }
}

.breadcrumb .crumb-controls {
  margin-left: auto;
}
.container-sm {
  max-width: 900px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}
.lnk {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
}
.lnk.router-link-exact-active {
  background-color: #ec635a;
  color: #ffffff;
}
.highlight {
  background-color: yellow;
}
</style>
