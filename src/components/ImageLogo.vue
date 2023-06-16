<template>
<div class="centerDiv">
<img alt="OUI AD GOOD logo" src="../assets/oag1.png"> 
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
    margin-bottom: 5%;
    margin-right: 7.5%;
    margin-top: 4%;
    position: relative;
}

.centerDiv{
    display: flex;
    margin-top: -5%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    margin-left: 4%;
    z-index: -10;
}

@media(max-width:600px){
    img{
        width: 100%;
        margin-left: 10%;
    }
}
</style>