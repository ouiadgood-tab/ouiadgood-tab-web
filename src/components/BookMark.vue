<template>
  <div>
    <div class="bookmark-icon">
      <i class="fa-sharp fa-regular fa-bookmark"></i>
    </div>
  </div>
</template>

<script >
export default{
  name: 'BookMark',
}
</script>

<style scoped>
div{
  margin-top: -7%;
  margin-left: 30px;
  font-size: 30px;
}
  .bookmark-icon {
    width: 20px;
    height: 20px;
    color: rgba(255, 255, 255, 0.795);
    transition: background-color 0.3s ease;
  }

  .bookmark-icon:hover {
    color: white;
  }
</style>
