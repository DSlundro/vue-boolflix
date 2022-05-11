<template>
    <div class="col-6 d-flex">
        <ul class="d-flex align-items-center gap-3 m-0">
            <li><a href="#">Home</a></li>
            <li><a href="#">Serie TV</a></li>
            <li><a href="#">Film</a></li>
            <li><a href="#">Original</a></li>
            <li><a href="#">Last added</a></li>
            <li><a href="#">Favourite</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MenuHeader',
}
</script>

<style lang="scss">
ul{
    list-style: none;
    li{
        a{
            color: $danger;
            text-decoration: none;
            &:hover{color: $light;}
        }
    }
}
</style>