<template>
    <div>
        <div class="setPos">
            <SettingNav/>
        </div>
        <DonateHeart class="statsDown"/>
    </div>
</template>

<script>
import DonateHeart from './DonateHeart.vue';
import SettingNav from './SettingNav.vue';

export default{
    components: { SettingNav, DonateHeart }
}
</script>

<style scoped>
.setPos{
    position: static;
}
.statsDown{
    margin-top: -50%;
}
</style>