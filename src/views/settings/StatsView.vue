<template>
    <div>
        <div class="setPos">
            <SettingNav/>
        </div>
        <StatsCon class="statsDown"/>
    </div>
     

</template>

<script>
import SettingNav from './SettingNav.vue';
import StatsCon from './StatsCon.vue';

export default{
    components: { SettingNav, StatsCon }
}
</script>

<style>
.setPos{
    position: static;
}
.statsDown{
    margin-top: -45%;
}
</style>