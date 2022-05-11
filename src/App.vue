<template>
  <div id="app">

    <header>
        <div class="row align-items-center m-0 p-3 bg-dark">
          <LogoHeader />
          <MenuHeader />
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

    <div class="container mt-4">
      <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        <!-- <select class="form-select" aria-label="Default select example">
          <option value="">Seleziona un genere</option>
          <option :value="gen.name" v-for="gen in genre" :key="gen.id">{{gen.name}}</option>
        </select> -->
        <CardMain :movie="movie" v-for="movie in all" :key="movie.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import LogoHeader from '@/components/partials/LogoHeader.vue'
import MenuHeader from '@/components/partials/MenuHeader.vue'
import CardMain from '@/components/partials/CardMain.vue'

export default {
  name: 'App',
  components: {
    LogoHeader,
    MenuHeader,
    CardMain,
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
      genre: [],
    }
  },
  methods:{
    callGenre(){
      axios
            .get(this.apiMoviesGenre)
            .then((response) => {
              this.genre.push(response.data.genres)
            })
    },
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

<style lang="scss">
@import '@/assets/scss/style.scss';
</style>
