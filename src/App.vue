<template>
  <div id="app">
    <h1>Vue Router Example</h1>
    
    <!-- 导航链接 -->
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

    <!-- 项目列表 -->
    <ul>
      <li v-for="item in items" :key="item.id" @click="navigateToItem(item)">
        {{ item.name }} (Click to view details)
      </li>
    </ul>

    <!-- 路由视图 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ]
    }
  },
  methods: {
    navigateToItem(item) {
      // 使用正确的路由名称
      this.$router.push({ name: 'item-details', params: { id: item.id } })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  margin: 10px 0;
}
</style>