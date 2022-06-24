function greetUser(first_name,last_name){
  console.log("Hello " + first_name + " " + last_name)
}

// greetUser("Spensir", "Fields")
// greetUser("Sammy", "K")
// greetUser("Nic", "Pederson")
// greetUser("Raphael", "Charles")

// the value of a funcation call is whatever that function call returns

// let x = 5;

// function sum(num1,num2){
//   for(let i = 1; i<10; i++){
//   console.log(i)
//   if(i == 3){
//     return;
//   }
  
//   return num1 + num2

//   console.log("after the return")
// }
// }
// let sumNum = sum(3,9) + (1,2);

// console.log(sumNum)

let artist = ["Drake", "J Cole", "MJ", "Hannah Montana", "The Dale Gribble Bluegrass Experince", "Kanye", "Ariana Grande"];

function searchForArtist(artistName){
  for(let i=0; i<artist.length; i++){
    // console.log(artist[i])
    if(artist[i] == artistName){
      return "Found your artist at index number " + i
    }
  }
}

console.log(searchForArtist("MJ"));