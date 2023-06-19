<template>
<div class="centerDiv">
<img alt="OUI AD GOOD logo" src="../assets/oui.png"> 
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
    height: 50%;
    width: 40%;
    margin-bottom: 5%;
    margin-right: 3%;
    margin-top: 0%;
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