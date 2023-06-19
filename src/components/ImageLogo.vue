<template>
<div class="centerDiv">
<<<<<<< HEAD
<img alt="OUI AD GOOD logo" src="../assets/oui.png"> 
=======
<img alt="OUI AD GOOD logo" src="/ouiadgood-logo-centered-by-OuiDoGood.png"> 
>>>>>>> 6131f0dd (fixes)
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
    width:80vw;
    object-fit: contain;
    height: 200px;
    margin-bottom: 30px;
    position: relative;
}

.centerDiv{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

</style>