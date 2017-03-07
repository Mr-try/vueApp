<template>
    <div class="main-body">
            <router-view></router-view>
    </div>
</template>

<style>
    .main-body {
        margin-top: 2px;
    }
</style>

<script>
    import router from '../../router'

    export default {
        data() {
            return {
                activeName: 'first',
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab.name);
                router.push("/1/"+tab.name);

            }
        }
    };
</script>
