<template>
    <div class="container">
        <div class="row">
            <div class="d-flex justify-content-center align-items-center">
                <div class="input-group w-25">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" v-model="query" @keyup.enter="callApi"/>
                    <button type="button" class="btn btn-primary" @click="callApi">Search</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    props:{
        searchFilm: String
    }
}
</script>

<style>

</style>