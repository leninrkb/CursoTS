let myvar:'lenin';
myvar='lenin'

type Specie = 'cat' | 'dog' | 'bird';
interface Pet{
  species:Species;
  eat();
  sleep();
}
interface Cat extends Pet{
  species:'cat'
  
}
interface Bird extends Pet{
  species:'bird'
  sing()
}
function petIsCat(pet:Pet): pet is Cat{
  return pet.species === 'cat'
}
function buyPet(pet:Specie, name:string):Pet{
	return name;
}
buyPet('cat','bibi');

function buyPet(pet: Species, name: string) : Pet;
function buyPet(pet: "cat", name: string): Cat;
function buyPet(pet: "dog", name: string): Dog;
function buyPet(pet: "bird", name: string): Bird;
function buyPet(pet: Species, name: string) : Pet { /*...*/ }
let dog = buyPet(myFavoritePet /* "dog" as defined above */, "Rocky");
