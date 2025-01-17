

export class Person{
    // name: string;
    //public address : string;

    constructor(
        public name :string,
        private address: string='No address'){}
}

// export class Hero extends Person{
//     constructor(
//         public alterEgo: string,
//         public age : number,
//         public realName: string
//     ){
//         super(realName,'New York');
//     }
// }
export class Hero {
    
    constructor(
        public alterEgo: string,
        public age : number,
        public realName: string,
        public person:Person,
    ){
        //this.person = new Person(realName);
    }
}
const tony = new Person('Tony Stark','New York');

const ironman = new Hero('ironman',45,'Tony',tony);

console.log(ironman)