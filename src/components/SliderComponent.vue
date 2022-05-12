<template>
    <div class="row m-0">
        <div class="img1 col-12">
            <div class="my_card">
                <img :src="objects[activeImage].image" :alt="'Image' + [activeImage].title" >
                <div class="text">
                    <h3>{{objects[activeImage].title}}</h3>
                    <small>{{objects[activeImage].text}}</small>
                </div>
            </div>
        </div>

        <div class="img2 col-2">
            <div class="thumbnails d-flex" @mouseenter="stop" @mouseleave="start"> 
                <img :src="objects[index].image" class="thumb" :class="activeImage === index ? 'active' : '' " 
                v-for="(image, index) in objects" :key="index" @click="activateImage(index)">
                <p>{{objects.title}}</p>
            </div>
            
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return {
        activeImage: 0,
        objects: [
            {
                image: 'https://img.uhdpaper.com/wallpaper/luffy-one-piece-417@1@g-preview.jpg?dl',
                title: 'Monkey D. Luffy',
                text: `Rufy è un ragazzo di media statura con occhi e capelli neri. Ha una cicatrice sotto l'occhio sinistro provocatosi quando era ancora un bambino per impressionare i Pirati del Rosso. È ben riconoscibile per via del cappello che indossa sempre, al punto che "Cappello di paglia" è divenuto il suo soprannome. All'interno del cappello custodiva inoltre la Vivre Card di Ace prima della sua morte.`,
            },
            {
                image: 'https://wallpaperbat.com/img/183886-roronoa-zoro-katana-one-piece-4k.jpg',
                title: 'Roronoa Zoro',
                text: `Zoro è un ragazzo mediamente alto e muscoloso con la pelle abbronzata. Porta sempre al seguito le sue tre spade legate con una fascia verde chiaro intorno alla vita al fianco destro, in modo da prenderle con facilità con la mano sinistra in caso di bisogno. Ha tre identici orecchini d'oro al lobo dell'orecchio sinistro e una bandana nera legata al bicipite sinistro che, quando è impegnato in un serio combattimento, usa legare intorno alla testa.`,
            },
            {
                image: 'https://img.wallpapersafari.com/desktop/1920/1080/74/81/mLlEq0.jpg',
                title: 'Nami',
                text: 'Nami è una ragazza giovane e snella. Ha un tatuaggio nero sulla spalla sinistra che rappresenta un mandarino ed una girandola, un omaggio rispettivamente a Bellmer e Genzo, che va a sostituire quello che raffigurava il simbolo della ciurma di Arlong. Sul braccio sinistro porta un Log Pose assegnatole in custodia in quanto navigatrice della ciurma e, oltre a questa particolare bussola, indossa uno dei braccialetti di sua sorella Nojiko, regalatole dopo la sconfitta di Arlong.',
            },
            {
                image: 'https://images6.alphacoders.com/937/937800.png',
                title: 'Nico Robin',
                text: `Nico Robin è una donna alta, magra e con un fisico atletico. Ha i capelli lunghi e neri, occhi blu e il naso sottile. Ha le braccia e le gambe lunghe e un fisico a clessidra. Molte persone la considerano attraente, soprattutto Sanji.`,
            },
            {
                image: 'https://wallpaper.dog/large/17267126.jpg',
                title: 'Vinsmoke Sanji',
                text: `Sanji è un uomo magro ma muscoloso, con capelli biondi pettinati in modo che coprano uno dei suoi occhi. La caratteristica fisica più particolare di Sanji sono le sue sopracciglia. Mentre il sopracciglio destro è a forma di spirale dalla parte esterna, quello sinistro è a spirale all'interno.`,
            },
            {
                image: 'https://images.alphacoders.com/934/934102.jpg',
                title: 'Usop',
                text: `Usop è un ragazzo giovane, magro e di carnagione leggermente olivastra. Ha i capelli neri e ricci ed un lungo naso, un'allusione a Pinocchio, il burattino a cui si allungava il naso ogni volta che mentiva.`,
            },
        ],
        }
    },
    mounted(){this.start();},
    methods: {
        prevImage(){
            if(this.activeImage === 0){
                this.activeImage = this.objects.length;
            }
            this.activeImage--;
        },
        nextImage(){
            this.activeImage++;
            if(this.activeImage === this.objects.length){
                this.activeImage = 0;
            }
        },
        start() {
            this.timer = setInterval(this.nextImage, 3200);
        },
        stop() {
            clearInterval(this.timer);
        },
        activateImage(imageIndex){
            this.activeImage = imageIndex;
        },
    },
}
</script>

<style lang="scss" scoped>
img{width: 100%;}
.row{
    display: flex; 
    align-items: center; 
}

.col-12, .col-2{padding: 0;}
.col-12 img{height: 60vh;}

.my_card{
    position: relative;
}

.my_card .text{
    background-color: rgba(0, 0, 0, 0.575);
    height: 140px;
    width: 100%;
    position: absolute;
    color: white;
    text-shadow: 0px 2px 10px gold;
    bottom: 0;
    font-size: 16px;
    padding: 20px 50px;
}

.thumbnails{
    height: 100%;
    position: relative;
}
.thumbnails img{
    filter: brightness(40%);
    cursor: pointer;
}

.active {
    border: 2px solid $danger;
    filter: initial !important;
}

p{
    color: white;
    z-index: 1;
    position: absolute;
    z-index: 0;
    font-size: 50px;
}
</style>