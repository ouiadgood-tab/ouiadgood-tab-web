<template>
<div class="centerDiv">
<img alt="OUI AD GOOD logo" src="../assets/oag.png"> 
<SearchWidget/>
</div>
</template>

<script>
import SearchWidget from './SearchWidget.vue';

export default{
    name: "ImageLogo",
    components: { SearchWidget }
}
</script>

<style scoped>
img{
    height: 150px;
    margin-bottom: 6%;
    margin-left: 5%;
}

.centerDiv{
    justify-content: center;
}
</style>