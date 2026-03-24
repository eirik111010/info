/* In this solution, javascript is used as source of truth. */
let playlist = [];
let searchTerm = "";

class Song {
  constructor(name) {
    this.name = name;
  }
  delete() {
    let i = playlist.indexOf(this);
    playlist.splice(i, 1);
    showPlaylist();
  }
}

function addSong() {
  let name = document.getElementById("songTextInput").value;
  document.getElementById("songTextInput").value = "";

  playlist.push(new Song(name));

  showPlaylist();
}
/*function remove(name){
            let index = 0;
            for (let i = 0 ; i < playlist.length; i++){
                if (playlist[index] == name){
                    index = i;
                    break;
                }
            }
            
            function isright(element){
                return element == name;
            }
            let index2 = playlist.findIndex(isright);
            //let index2 = playlist.findIndex((element)=>(element == name));
            playlist.splice(index,1);
            showPlaylist();
        }*/

function showPlaylist() {
  // do sorting and get a new sorted list
  let showlist = dosearch();

  let playlistUl = document.getElementById("playlist");
  playlistUl.innerHTML = "";
  // display songs from search result list
  for (let song of showlist) {
    let li = createListElement(song);
    playlistUl.appendChild(li);
  }
}

function createListElement(song) {
  let li = document.createElement("li");
  li.textContent = song.name;
  let img = document.createElement("img");
  img.src = "/static/images/delete.png";
  img.classList.add("delete");
  img.onclick = function () {
    song.delete();
  };
  li.appendChild(img);
  return li;
}

// a comparison function is needed for sorting
function isLargerName(songA, songB) {
  //return if songname A is before songname B in the alphabet.
  return songA.name > songB.name;
}

function sortSongs() {
  // sort playlist array with compare function
  playlist.sort(isLargerName);
  showPlaylist();
}

function search() {
  // set global search
  let searchValue = document.getElementById("songSearch").value;
  // convert searchTerm to all lower case, to be able to match, ingoring case.
  searchTerm = searchValue.toLowerCase();
  // do search when showing new playlist.
  showPlaylist();
}

// find the songs in Playlist, that match the search term
function dosearch() {
  let searchlist = [];
  for (let i = 0; i < playlist.length; i++) {
    // convert name to lower case for case ignoring matching.
    let lowername = playlist[i].name.toLowerCase();
    // index of finds where in the lowername the search term is. -1 means, is not there
    if (lowername.indexOf(searchTerm) > -1) {
      // search term matches, add to new list.
      searchlist.push(playlist[i]);
    }
  }
  return searchlist;
}
