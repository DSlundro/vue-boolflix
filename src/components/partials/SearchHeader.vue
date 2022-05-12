<template>
    <div class="col-4">
        <div class="d-flex justify-content-end align-items-center p-fixed">
            <div class="input-group w-75">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" 
                v-model="query"
                @keyup.enter="callApi"/>
                <button type="button" class="btn btn-danger" 
                @click="callApi"
                >Search</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchHeader',

}
</script>

<style lang="scss" scoped>

</style>