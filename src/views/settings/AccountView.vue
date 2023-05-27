<template>
    <div>
        <div class="setPos"> 
            <SettingNav/>
        </div >
        <AccountSet class="account"/>
    </div>
</template>

<script>
import AccountSet from './AccountSet.vue';
import SettingNav from './SettingNav.vue';


export default{
    components: { SettingNav, AccountSet }
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