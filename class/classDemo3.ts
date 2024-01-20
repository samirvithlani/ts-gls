class Users{

        //param...
        name:string;
        age:number;
        pers:number;
        hobbies:string[];

        constructor(name1:string,age1:number,per1:number,hobbies1:string[]){

            this.name = name1;
            this.age = age1;
            this.pers = per1;
            this.hobbies = hobbies1;
            
        }

        getUserData():void{
                
                console.log("Name is ",this.name);
                console.log("Age is ",this.age);
                console.log("Percentage is ",this.pers);
                console.log("Hobbies are ",this.hobbies);

                for(let i=0;i<this.hobbies.length;i++){
                    console.log("Hobbies are ",this.hobbies[i]);
                }
        }



}

let user = new Users("Rajesh",21,90,["Cricket","Football"]);
user.getUserData();