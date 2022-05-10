<template>
  <div id="app">
    <div class="container">
        <div class="">
            <div class="d-flex justify-content-center align-items-center">
                <div class="input-group w-25">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" v-model="query" @keyup.enter="callApi"/>
                    <button type="button" class="btn btn-primary" @click="callApi">Search</button>
                </div>
            </div>
        </div>
      <div class="row row-cols-5">
        <div class="col pt-5" v-for="movie in all" :key="movie.id">
          <div class="card">
            <img class="card-img-top"  
            :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" >
            <div class="card-body">

              <div class="title
              
              ">
                <h5 v-if="movie.title">{{movie.title}}</h5>
                <h5 v-else>{{movie.name}}</h5>
              </div>
              
              <div class="original_title">
                <h6 v-if="movie.original_title && movie.original_title != movie.title">{{movie.original_title}}</h6>
                <h6 v-if="movie.original_name && movie.original_name != movie.name">{{movie.original_name}}</h6>
              </div>

              <div class="lang 
              d-flex">
                <div class="pe-2">Language:
                </div><lang-flag :iso="movie.original_language"/>
              </div>

              <div class="rating
              d-flex align-items-center">
                  <div class="pe-2 pt-1">Vote: {{movie.vote_average}}</div>
                  <rate :length="5" :value="starRating(movie.vote_average)" :readonly="true"></rate>
              </div>

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
      api_movies: `https://api.themoviedb.org/3/search/movie?api_key=26c121a783f1c3835ab5cdc68c423a82&language=it-IT&page=1&include_adult=false&query=`,
      api_series: `https://api.themoviedb.org/3/search/tv?api_key=26c121a783f1c3835ab5cdc68c423a82&language=it-IT&page=1&include_adult=false&query=`,
      movies: [],
      series: [],
      all: [],
      loading: true,
      query: '',
    }
  },
  methods:{
    callApi(){
      axios
      .get(`${this.api_movies}${this.query}`)
      .then((response) => {
        this.movies = response.data.results;
        this.all = response.data.results;
        this.loading = false;
        console.log(this.movies)
      })
      .catch(error => {
        console.error(error);
        error;
        this.error = "Loading..."
      });

      axios
      .get(`${this.api_series}${this.query}`)
      .then((response) => {
        this.series = response.data.results;
        this.all = [...this.all, ...response.data.results]
        this.loading = false;
        console.log(this.series)
      })
      .catch(error => {
        console.error(error);
        error;
        this.error = "Loading..."
      });
    },
    
    starRating(rating){
            return Math.round(Number(rating) / 2)
        },

    },
  }
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
#app {
  padding: 0;margin: 0;box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.card{
  height: 450px;
}
.card-body{
  lang-flag{width: 32px; height: 24px; border: 1px solid gray;}
}
img{
  width: 100%;
  height: 350px;
}

.Rate{
  button{
    margin: 0 !important;padding: 0 !important; cursor: initial !important;
  }
  svg.icon{margin: 0 2px !important;}
}
</style>
