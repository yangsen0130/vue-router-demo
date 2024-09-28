<template>
    <div class="item-details">
      <h2>Item Details</h2>
      <p>Item ID: {{ $route.params.id }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ItemDetails',
    mounted() {
      console.log('Item ID:', this.$route.params.id)
      // 这里你可以根据 ID 加载具体的项目数据
    }
  }
  </script>