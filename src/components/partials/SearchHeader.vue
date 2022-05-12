<template>
    <div class="col-4">
        <div class="d-flex justify-content-end align-items-center p-fixed">
            <div class="input-group w-75">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" 
                @input="$emit('input', $event.target.value)"
                @keyup.enter="$emit('submitSearch')"/>

                <button type="button" class="btn btn-danger"
                @input="$emit('input', $event.target.value)"
                @click="$emit('submitSearch')">
                <div class="waviy">
                    <span style="--i:1">S</span>
                    <span style="--i:2">E</span>
                    <span style="--i:3">A</span>
                    <span style="--i:4">R</span>
                    <span style="--i:5">C</span>
                    <span style="--i:6">H</span>
                    </div>
                </button>
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
@import '@/assets/scss/partials/SearchButtonAnimation.scss'
</style>