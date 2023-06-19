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
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

</style>