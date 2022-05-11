<template>
    <header>
        <div class="row align-items-center m-0 p-3 bg-dark">
            <div class="col-2">
            <img src="@/assets/img/logo.png" alt="">
            </div>
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
            <div class="col-4">
            <div class="d-flex justify-content-end align-items-center p-fixed">
                    <div class="input-group w-75">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" v-model="query" @keyup.enter="callApi"/>
                        <button type="button" class="btn btn-danger" @click="callApi">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
}
</script>

<style lang="scss">




</style>