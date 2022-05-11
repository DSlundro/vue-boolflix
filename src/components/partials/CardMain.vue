<template>
    <div class="col pt-5" >
        <!-- CARD CONTAINER -->
        <div class="my-card flip-card">
            <!-- FLIPPING CARD SECTION -->
            <div class="flip-card-inner">
                <!-- FRONT CARD -->
                <div class="flip-card-front">
                    <img v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" >
                    <h2 v-else>Missing image</h2>
                </div>

                <!-- BACK CARD -->
                <div class="flip-card-back p-4 bg-dark">
                    
                    <!-- TITLE -->
                    <div class="title fs-5">
                        <h6 v-if="movie.title"><b>Titolo:</b> {{movie.title}}</h6>
                        <h6 v-else><b>Titolo:</b> {{movie.name}}</h6>
                    </div>
                    
                    <!-- ORIGINAL TITLE -->
                    <div class="original_title">
                        <h6 v-if="movie.original_title && movie.original_title != movie.title"><b>Titolo originale:</b> {{movie.original_title}}</h6>
                        <h6 v-if="movie.original_name && movie.original_name != movie.name"><b>Titolo originale:</b> {{movie.original_name}}</h6>
                    </div>

                    <!-- ORIGINAL LANGUAGE -->
                    <div class="lang d-flex">
                        <div class="pe-2"><b>Lingua originale:</b>
                        </div><lang-flag :iso="movie.original_language"/>
                    </div>

                    <!-- VOTE AVERAGE -->
                    <div class="rating d-flex align-items-center">
                        <div class="pe-2 pt-1"><b>Voto:</b> {{movie.vote_average}}</div>
                        <rate :length="5" :value="starRating(movie.vote_average)" :readonly="true"></rate>
                    </div>
                    
                    <!-- ACTORS-->
                    <div class="cast py-1">
                        <div class="d-flex flex-wrap">
                        <h6 class="m-0 p-0 pe-1"><b>Cast: </b></h6>
                        <div class="person movies_cast pe-1" v-for="actor in movie.cast" :key="actor.id">
                        {{actor.name}},
                        </div>
                        </div>
                    </div>

                    <!-- OVERVIEW -->
                    <div class="overview pt-1">
                        <p v-if="movie.overview"><b class="fs-6 pe-1">Overview:</b>{{movie.overview}}</p>
                        <p v-else>Descrizione mancante!</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardMain',
    props:{
        movie: Object
    },
    methods:{
        starRating(rating){
            return Math.round(Number(rating) / 2)
        },
    }
}
</script>

<style lang="scss">
.my-card{
    cursor: pointer;
    .flip-card-front{
        img{
        width: 100%;
        height: 350px;
        }
    }
    .flip-card-back{
        lang-flag{width: 32px; height: 24px; border: 1px solid gray;}
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
        .overview p{font-size: 12px; text-align: justify;}
        .cast .person{
        font-size: 12px;
        }
    }
}

// FLIPPING CARD ANIMATION
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
backface-visibility: hidden;
}

.flip-card-back {
color: white;
transform: rotateY(180deg);
overflow-y: auto;
}
</style>