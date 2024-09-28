<template>
  <div class="home">
    <h2>Welcome to the Home Page</h2>
    <p>This is the main page of our application.</p>
    <h3>List of Items:</h3>
    <ul>
      <li v-for="item in items" :key="item.id" @click="navigateToItem(item)">
        {{ item.name }} (Click for details)
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
      this.$router.push({ name: 'item-details', params: { id: item.id } })
    }
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
}

li:hover {
  background-color: #e0e0e0;
}
</style>