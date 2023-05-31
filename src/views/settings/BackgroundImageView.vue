<template>
    <div>
        <div class="setPos"> 
            <SettingNav/>
        </div >
        <BackgroundImage class="account"/>
    </div>
</template>

<script>
import SettingNav from './SettingNav.vue';
import BackgroundImage from './Background/BackgroundImage.vue';


export default{
    components: { SettingNav, BackgroundImage }
}
</script>

<style scoped>
.setPos{
    position: static;
}
.account{
    margin-top: -45%;
}
</style>