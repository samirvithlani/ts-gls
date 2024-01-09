function sumOfNums(...nums:number[]):void{

    console.log(nums);

}

//sumOfNums()
sumOfNums(10,20,30,40)

//default parameter

function userData (age:number =18,name:string="ramu"):void{
    console.log(age,name)
}


//userData(21,"Ravi");
userData(23)