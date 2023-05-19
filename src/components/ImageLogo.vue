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
    margin-bottom: 1%;
    margin-right: 11.5%;
    margin-top: 4%;
}

.centerDiv{
    justify-content: center;
}
</style>