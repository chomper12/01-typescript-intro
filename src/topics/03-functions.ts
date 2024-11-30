function addnumbers( a:number , b:number ){
    return a + b;
}

 const addnumbersArrow = (a:number, b:number) => {
    return `${a + b}`;
 }

 function multiply( firsNumber:number,secondNumber?:number,base:number = 2){
    return firsNumber * base;
 }
 //const result : number =  addnumbers(1,2)
 //const result2 : string =  addnumbersArrow(1,2)
 //const multiplyresult:number = multiply(5);
//console.log({result,result2,multiplyresult}) 

interface Character{
    name:string;
    hp:number;
    showHp:()=> void
}

const healCharacter = (character:Character, amaount:number)=> {
    character.hp += amaount;

}
const strider = {
    name:'strider',
    hp:50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}
healCharacter(strider,10);
healCharacter(strider,50);

strider.showHp();