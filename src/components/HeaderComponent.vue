<template>
    <header>
        <div class="row align-items-center m-0 p-3 bg-dark">
            <LogoHeader />
            <MenuHeader />
            <SearchHeader v-model="query" @submitSearch="callApi"/>
        </div>
    </header>
</template>

<script>
import axios from 'axios';
import state from '@/state'

import LogoHeader from '@/components/partials/LogoHeader.vue'
import MenuHeader from '@/components/partials/MenuHeader.vue'
import SearchHeader from '@/components/partials/SearchHeader.vue';


export default {
    name: 'HeaderComponent',
    components: {
        LogoHeader,
        MenuHeader,
        SearchHeader,
    },
    data(){
        return{
            apiMovies: `https://api.themoviedb.org/3/search/movie?api_key=26c121a783f1c3835ab5cdc68c423a82&language=it-IT&page=1&include_adult=false&query=`,
            apiSeries: `https://api.themoviedb.org/3/search/tv?api_key=26c121a783f1c3835ab5cdc68c423a82&language=it-IT&page=1&include_adult=false&query=`,
            apiMoviesCast: 'https://api.themoviedb.org/3/movie/ ... /credits?api_key=26c121a783f1c3835ab5cdc68c423a82&language=it-IT',
            apiSeriesCast: 'https://api.themoviedb.org/3/tv/ ... /credits?api_key=26c121a783f1c3835ab5cdc68c423a82&language=it-IT',
            apiMoviesGenre: `https://api.themoviedb.org/3/genre/movie/list?api_key=26c121a783f1c3835ab5cdc68c423a82&language=it-IT`,
            apiSeriesGenre: `https://api.themoviedb.org/3/genre/tv/list?api_key=26c121a783f1c3835ab5cdc68c423a82&language=it-IT`,
            movies: [],
            series: [],
            all: [],
            loading: true,
            query: '',
        }
    },
    methods:{
        // API FOR GENRES
        callGenre(){
            axios
            .get(this.apiMoviesGenre)
            .then((response) => {
            this.genre.push(response.data.genres)
            })
        },

        // GENERAL API
        callApi(){

            // API MOVIES
            axios
            .get(`${this.apiMovies}${this.query}`)
            .then((response) => {
            this.movies = response.data.results;
            this.all = response.data.results;
            this.loading = false;
            
                // API MOVIES CAST
                this.movies.forEach((movie) => {
                    axios
                    .get('https://api.themoviedb.org/3/movie/'+ movie.id +'/credits?api_key=26c121a783f1c3835ab5cdc68c423a82&language=it-IT')
                    .then((response) => {
                    this.$set(movie, 'cast', response.data.cast.slice(0, 5))
                    })
                })

                // API MOVIES GENRES
                this.movies.forEach((genre) => {
                    axios
                    .get('https://api.themoviedb.org/3/genre/movie/list?api_key=26c121a783f1c3835ab5cdc68c423a82&language=it-IT&id=' + genre.id)
                    .then((response) => {
                    this.$set(genre, 'genre', response.data.genres)
                    })
                })
            });

            // API SERIES
            axios
                .get(`${this.apiSeries}${this.query}`)
                .then((response) => {
                this.series = response.data.results;
                this.all = [...this.movies, ...this.series]
                state.all = this.all
                this.loading = false;

                    // API SERIES CAST
                    this.series.forEach((serie) => {
                    axios
                    .get('https://api.themoviedb.org/3/tv/'+ serie.id +'/credits?api_key=26c121a783f1c3835ab5cdc68c423a82&language=it-IT')
                    .then((response) => {
                    this.$set(serie, 'cast', response.data.cast.slice(0, 5))
                    })
                })
            })
        },
    },
}
</script>

<style lang="scss" scoped>

</style>