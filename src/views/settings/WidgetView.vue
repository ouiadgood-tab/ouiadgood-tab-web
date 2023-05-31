<template>
    <div>
        <div class="setPos"> 
            <SettingNav/>
        </div >
        <WidgetSet class="account"/>
    </div>
</template>

<script>
import SettingNav from './SettingNav.vue';
import WidgetSet from './WidgetSet.vue';


export default{
    components: { SettingNav, WidgetSet }
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