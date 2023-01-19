// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let imageDisplay = document.querySelector(".display-image");
let songDisplay = document.querySelector(".display-song");
let artistDisplay = document.querySelector(".display-artist");
let linkDisplay = document.querySelector(".display-link");

console.log(linkDisplay)
// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

let songNameList = [
  "How Far I’ll Go",
  "Let it Go",
  "Reflection",
  "We don’t talk about Bruno",
  "Colors of the Wind"
]

let artists = [
  "Ella Mai",
  "Auli'i Cravalho",
  "Idina Menzel",
  "Christina Aguilera",
  "Encanto - Cast, Rhenzy Feliz, Adassa, Mauro Castillo, Stephanie Beatriz, Diane Guerrero, Carolina Gaitán",
  "Judy Kuhn",
]

let songLinkList = [
  "https://www.youtube.com/watch?v=6YNZlXfW6Ho",
  "https://www.youtube.com/watch?v=cPAbx5kgCJo",
  "https://www.youtube.com/watch?v=L0MK7qz13bU",
  "https://www.youtube.com/watch?v=lGGXsm0a5s0",
  "https://www.youtube.com/watch?v=bvWRMAU6V-c",
  "https://www.youtube.com/watch?v=O9MvdMqKvpU"
]

let imgURL = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-hLZvl7VWw60VWNs3_801dskbtKA4-x8Bw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJp5f5Fd4MoNoPwe_6VpB9sse2Sb0qHdK-A&usqp=CAU",
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fblog.tutorabcchinese.com%2Fhs-fs%2Fhubfs%2Ftrue-facts-about-the-real-mulan.jpg%3Fwidth%3D1023%26name%3Dtrue-facts-about-the-real-mulan.jpg&imgrefurl=https%3A%2F%2Fblog.tutorabcchinese.com%2Fexpats%2Ffacts-about-the-real-mulan&tbnid=VlOnFSi7CCbQ2M&vet=12ahUKEwjJq7eWx9L8AhXJPEQIHXEUD1IQMygSegUIARCOAg..i&docid=At-1nQG9ccTGOM&w=1023&h=628&q=mulan&ved=2ahUKEwjJq7eWx9L8AhXJPEQIHXEUD1IQMygSegUIARCOAg",
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.bauerhosting.com%2Flegacy%2Fmedia%2F61f1%2F1dc7%2F2ea3%2F9557%2F7c07%2F8954%2Fbruno-1.jpg%3Fformat%3Djpg%26quality%3D80%26width%3D960%26height%3D540%26ratio%3D16-9%26resize%3Daspectfill&imgrefurl=https%3A%2F%2Fwww.empireonline.com%2Fmovies%2Ffeatures%2Fmaking-of-we-dont-talk-about-bruno-encanto-biggest-hit%2F&tbnid=VgBeNPV8u5xH1M&vet=12ahUKEwjS8c_Nx9L8AhWQOEQIHQGKDlcQMygHegUIARD1AQ..i&docid=wr7QW9rmgIZJhM&w=960&h=540&q=encanto%20we%20don%27t%20talk%20about%20bruno&ved=2ahUKEwjS8c_Nx9L8AhWQOEQIHQGKDlcQMygHegUIARD1AQ",
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FO9MvdMqKvpU%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DO9MvdMqKvpU&tbnid=hgQ5DvhwDPJKiM&vet=12ahUKEwiL9KXhx9L8AhXyK0QIHYcYA_oQMygAegUIARDpAQ..i&docid=GPRWRPurZ2_TdM&w=1280&h=720&q=colors%20of%20the%20wind&ved=2ahUKEwiL9KXhx9L8AhXyK0QIHYcYA_oQMygAegUIARDpAQ"
];



//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


// task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.



}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
