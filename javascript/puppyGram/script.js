function uploadpup(element) {
  console.log("Hello World",element);
  element.innerText = "Uploaded! Thank you.";
}

function removeElement(element){
  console.log("Trying to remove something...");
  element.remove();

}

function playVideo(element){
  console.log("playing video");
  element.play();
}

function pawsVideo(element){
  element.pause();
}

function changeImg(element){
  console.log("hello", element);
  element.src = "./resources/anothapuppy.jpeg"
}

function coookieMonster(){
  console.log("cookie monster!")
  document.querySelector("#cookie-box")
  var element = document.querySelector("#cookie-box")
  element.remove()
}

function playingVideo(element){
  console.log("playing video")
  element.play();
}

function revertImg(element){
  console.log("hello", element);
  element.src = "./resources/puppy.jpeg"
}

function likeadd(id){
  console.log("liking",id);
  var element = document.querySelector(id);
  console.log("element looks like this", element.innerText);
  let likeCount = Number(element.innerText);
  console.log(likeCount)
  likeCount+=1;
  element.innerText = likeCount;
}