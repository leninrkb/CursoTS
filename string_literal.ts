let myFavoritePet:'cat';
myFavoritePet='cat'

type Specie = 'cat' | 'dog' | 'bird';
interface Pet{
  specie:Specie;
  name:string;
  eat();
  sleep();
  walk();
}
interface Cat extends Pet{
  specie:'cat'
  
}
interface Bird extends Pet{
  specie:'bird'
  sing()
}

function petIsCat(pet:Pet): pet is Cat{
  return pet.specie === 'cat'
}
function petIsBird(pet:Pet): pet is Bird{
  return pet.specie === 'bird'
}
function buyPet(pet:Specie, name:string):Pet{
  if (pet === 'cat'){
    return {
      specie:'cat',
      name:this.name,
      eat: function (){
        console.log(`meow meow ${this.name} drinks milk`);
        
      },
      sleep:function(){
        console.log(`meow meow ${this.name} now sleeps`);
      }
    } as Cat;
  }else if (pet === 'bird'){
    return {
      specie:'bird',
      name:this.name,
      eat:function(){
        console.log(`${this.name} eats a cookie`);
      },
      sing:function(){
        console.log(`${this.name} is happy and sings`);
      }
    } as Bird
  }else{
    throw `lo sentimos, no tenemos un ${pet} o no se que monda`;
    
  }
}
buyPet('cat','bibi');
buyPet('dog','bibi');


let cat = buyPet(myFavoritePet, "Rocky");


function playWithPet(pet:Pet){
  console.log(`hey ${pet.name}, vamoa juga`);
  
  if(petIsCat(pet)){
    pet.eat()
    pet.sleep()
  }else if(petIsBird(pet)){
    pet.eat()
    pet.sing()
  }
}