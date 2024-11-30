interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;
}
interface Details{
    author:string;
    year:number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author:'Ed Sheeran',
        year: 2015
    }
}

//desestructuracion es con {}
// se aplica en objetos, ala hora de hacer importaciones y expórtaciones en los modulos,
// en los argumentos de las funciones, se puede aplicar directamente en cualquier archivo etc
const song = 'new song';
const { song: anotherSong,songDuration:duration,details } = audioPlayer;
const {author} = details

//console.log('song : ',anotherSong);
//console.log('Duration : ',duration);
//console.log('Author : ', author);


//Desestructuracion de Arreglas es con []
const [,,trunks = 'Not Found']: string[] = ['Goku','Vegeta'];

console.error('Personaje 3:', trunks)
