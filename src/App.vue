<template>
  <div id="app">
    <div class="container">
        <div class="">
            <div class="d-flex justify-content-center align-items-center">
                <div class="input-group w-25">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" v-model="query"/>
                    <button type="button" class="btn btn-primary" @click="callApi">Search</button>
                </div>
            </div>
        </div>
      <div class="row row-cols-5">
        <div class="col m-auto pt-5" v-for="movie in movies" :key="movie.id">
          <div class="card">
            <img class="card-img-top" 
            :src="movie.poster_path" alt="Card image cap">
            <div class="card-body">
              <h5>{{movie.title}}</h5>
              <h5>{{movie.original_title}}</h5>
              <p>{{movie.original_language}}</p>
              <p>{{movie.vote_average}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import SearchBar from '@/components/SearchBar.vue'

//import axios
import axios from 'axios';

export default {
  name: 'App',
  components: {
  //  SearchBar,
  },
  data(){
    return{
      movies: null,
      loading: true,
      query: '',
    }
  },
  methods:{
    callApi(){
      axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=26c121a783f1c3835ab5cdc68c423a82&language=it-IT&query=${this.query}&page=1&include_adult=false`)
      .then((response) => {
        this.movies = response.data.results;
        this.loading = false;
        console.log(this.movies)
      })
      .catch(error => {
        console.error(error);
        error;
        this.error = "Loading..."
      })
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
