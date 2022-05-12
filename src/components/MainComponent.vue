<template>
    <main>
        <div class="container mt-4">
            <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                <CardMain :movie="movie" v-for="movie in all" :key="movie.id"/>
            </div>
        </div>
    </main>
</template>

<script>
import state from '@/state'

import CardMain from '@/components/partials/CardMain.vue'
export default {
    name: 'MainComponent',
    components:{
        CardMain,
    },
    computed:{
        all(){
            return state.all
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>