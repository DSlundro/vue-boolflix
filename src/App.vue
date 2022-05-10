<template>
  <div id="app">

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

    <div class="container mt-4">
      <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        <div class="col pt-5" v-for="movie in all" :key="movie.id">
          
          <div class="flip-card">
            <div class="my-card flip-card-inner">
                <div class="flip-card-front">
                  <img v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" >
                  <h2 v-else>Missing image</h2>
                </div>
              <div class="back flip-card-back p-4">

                  <div class="title fs-5">
                  <h6 v-if="movie.title"><b>Titolo:</b> {{movie.title}}</h6>
                  <h6 v-else><b>Titolo:</b> {{movie.name}}</h6>
                </div>
                
                <div class="original_title">
                  <h6 v-if="movie.original_title && movie.original_title != movie.title"><b>Titolo originale:</b> {{movie.original_title}}</h6>
                  <h6 v-if="movie.original_name && movie.original_name != movie.name"><b>Titolo originale:</b> {{movie.original_name}}</h6>
                </div>

                <div class="lang d-flex">
                  <div class="pe-2"><b>Lingua originale:</b>
                  </div><lang-flag :iso="movie.original_language"/>
                </div>

                <div class="rating d-flex align-items-center">
                    <div class="pe-2 pt-1"><b>Voto:</b> {{movie.vote_average}}</div>
                    <rate :length="5" :value="starRating(movie.vote_average)" :readonly="true"></rate>
                </div>

                <div class="overview pt-1">
                  <p v-if="movie.overview">{{movie.overview}}</p>
                  <p v-else>Descrizione mancante!</p>
                </div>

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
body{
  background-image: url(@/assets/img/bg.jpg);
  background-color: black;
  background-position: center -200px;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
#app {
  padding: 0;margin: 0;box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header{
  img{
    width: 150px;
    height: auto;
  }
  ul{
    list-style: none;
    li{
      a{
        color: $danger;
        text-decoration: none;
        &:hover{color: $light;}
      }
      }
  }
}

.my-card{
    cursor: pointer;
    .back{
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
    h2{
      background-color: $dark;
      color: $danger;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .lang {font-size: 15px;}
    .overview p{font-size: 12px;}
}

.flip-card {
  background-color: transparent;
  height: 350px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  background-color: $dark;
  color: white;
  transform: rotateY(180deg);
  overflow-y: auto;
}
</style>
