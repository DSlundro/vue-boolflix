<template>
    <div class="col-4">
        <div class="d-flex justify-content-end align-items-center p-fixed">
            <div class="input-group w-75">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" 
                @input="$emit('input', $event.target.value)"
                @keyup.enter="$emit('submitSearch')"/>

                <button type="button" class="btn btn-danger"
                @input="$emit('input', $event.target.value)"
                @click="$emit('submitSearch')"
                >Search</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SearchHeader',
    props:{
        query: String
    }
}
</script>

<style lang="scss" scoped>

</style>