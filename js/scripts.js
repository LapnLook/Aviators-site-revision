"use strict";

var visibleCategoryNumber = 1;
var visibleAlbumNumber = 2;
var selectedCategoryNumber = 1; //Not used; Meant to exist in case song selection is implemented
var selectedAlbumNumber = 2; //Not used; Meant to exist in case song selection is implemented
var selectedSongNumber = 1; //Not used; Meant to exist in case song selection is implemented

//Makes the black overlay go away once the body has finished loading
function disableBlackOverlay(){
	document.getElementById('loading').style.display = 'none';
}

//Hides all four pages on the About screen and then makes the selected one visible
function aboutpageNavButtonClick(selected){
	document.getElementById('about_me_container').style.display = 'none';
	document.getElementById('equipment_container').style.display = 'none';
	document.getElementById('resources_container').style.display = 'none';
	document.getElementById('contact_container').style.display = 'none';
	document.getElementById(selected).style.display = 'block';
}

//Opens the selected dropdown button, but first closes any other dropdowns
function toggleDropdown(id) {
	var dropdowns = document.getElementsByClassName("dropdownContent");
    for (var i = 0; i < dropdowns.length; i++) {
      var open = dropdowns[i];
      if (open.classList.contains('show')) {
        open.classList.remove('show');
      }
    }
    document.getElementById(id).classList.toggle("show");
}

//Closes dropdowns if the mouse is clicked somewhere else
window.onclick = function(event) {
  if (!event.target.matches('.dropdownButton')) {

    var dropdowns = document.getElementsByClassName("dropdownContent");
    for (var i = 0; i < dropdowns.length; i++) {
      var open = dropdowns[i];
      if (open.classList.contains('show')) {
        open.classList.remove('show');
      }
    }
  }
}

// Changes the width and height first to initiate the CSS transformation, and then changes the actual image too
function equipmentChangeImage(string, width, height){	
	document.getElementById('equipment_image').style.width = width;
	document.getElementById('equipment_image').style.height = height;
	document.getElementById('equipment_image').src = 'assets/images/equipment/' + string + '.jpg';
}

// Exactly what it says on the tin
function eraseContactForm(){
	document.getElementById('contactName').value = "";
	document.getElementById('contactEmail').value = "";
	document.getElementById('contactMessage').value = "";
}

// It changes the source of the embedded video. Nothing else
function changeVideo(string){
	document.getElementById('current_video').src = string;
}

//The switch isn't needed right now, because EPs, Singles, and Compilations don't exist yet. Otherwise this function changes the images on the discography page, then calls the function that changes the tracklist and the links
function discographyChangeAlbum(selected,number){
	document.getElementById('album_cover').src = 'assets/images/' + selected + '/cover.jpg';
	document.getElementById('discography_background').src = 'assets/images/' + selected + '/background.jpg';
	switch (visibleCategoryNumber){
		case 1:
			discographyAlbumTracklist(number);
			visibleAlbumNumber=number;
			break;
		case 2:
			discographyEpTracklist(number);
			visibleAlbumNumber=number;
			break;
		case 3:
			discographySingleTracklist(number);
			visibleAlbumNumber=number;
			break;
		case 4:
			discographyCompilationTracklist(number);
			visibleAlbumNumber=number;
	}
}

//Calls the previous album's tracklist changing function
function previousAlbum(){
	if (visibleAlbumNumber !== 11){
		visibleAlbumNumber++;
		switch (visibleAlbumNumber){
			case 1:
				discographyChangeAlbum('a_song_that_never_ends',visibleAlbumNumber);
				break;
			case 2:
				discographyChangeAlbum('stargazers',visibleAlbumNumber);
				break;
			case 3:
				discographyChangeAlbum('from_oceans_to_skies',visibleAlbumNumber);
				break;
			case 4:
				discographyChangeAlbum('building_better_worlds',visibleAlbumNumber);
				break;
			case 5:
				discographyChangeAlbum('ghosts_in_the_code',visibleAlbumNumber);
				break;
			case 6:
				discographyChangeAlbum('mirrors',visibleAlbumNumber);
				break;
			case 7:
				discographyChangeAlbum('from_all_sides',visibleAlbumNumber);
				break;
			case 8:
				discographyChangeAlbum('aeterno',visibleAlbumNumber);
				break;
			case 9:
				discographyChangeAlbum('the_adventure',visibleAlbumNumber);
				break;
			case 10:
				discographyChangeAlbum('reflections_of_a_dream',visibleAlbumNumber);
				break;
			case 11:
				discographyChangeAlbum('never_say_forever',visibleAlbumNumber);
		}
	}
}

//Calls the next album's tracklist changing function
function nextAlbum(){
	if (visibleAlbumNumber !== 1){
		visibleAlbumNumber--;
		switch (visibleAlbumNumber){
			case 1:
				discographyChangeAlbum('a_song_that_never_ends',visibleAlbumNumber);
				break;
			case 2:
				discographyChangeAlbum('stargazers',visibleAlbumNumber);
				break;
			case 3:
				discographyChangeAlbum('from_oceans_to_skies',visibleAlbumNumber);
				break;
			case 4:
				discographyChangeAlbum('building_better_worlds',visibleAlbumNumber);
				break;
			case 5:
				discographyChangeAlbum('ghosts_in_the_code',visibleAlbumNumber);
				break;
			case 6:
				discographyChangeAlbum('mirrors',visibleAlbumNumber);
				break;
			case 7:
				discographyChangeAlbum('from_all_sides',visibleAlbumNumber);
				break;
			case 8:
				discographyChangeAlbum('aeterno',visibleAlbumNumber);
				break;
			case 9:
				discographyChangeAlbum('the_adventure',visibleAlbumNumber);
				break;
			case 10:
				discographyChangeAlbum('reflections_of_a_dream',visibleAlbumNumber);
				break;
			case 11:
				discographyChangeAlbum('never_say_forever',visibleAlbumNumber);
		}
	}
}

//Each number represents an album, and the switch determines which tracklist replaces the current one. This is the last function, there's no need to scroll all the way to the bottom
function discographyAlbumTracklist(number){
	switch(number){
		case 1:
			document.getElementById('albumText').style.color = "white";
			
			document.getElementById('albumTitle').innerHTML = 'A SONG THAT NEVER ENDS';
			document.getElementById('albumDate').innerHTML = 'DECEMBER 1, 2016';
			
			document.getElementById('song1title').innerHTML = '01 - Lowborn';
			document.getElementById('song1feature').innerHTML = '';
			document.getElementById('song1_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song2title').innerHTML = '02 - A Song That Never Ends';
			document.getElementById('song2feature').innerHTML = '';
			document.getElementById('song2_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song3title').innerHTML = '03 - Alive';
			document.getElementById('song3feature').innerHTML = '';
			document.getElementById('song3_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song4title').innerHTML = '04 - Constellations';
			document.getElementById('song4feature').innerHTML = '';
			document.getElementById('song4_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song5title').innerHTML = '05 - Impossible';
			document.getElementById('song5feature').innerHTML = '';
			document.getElementById('song5_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song6title').innerHTML = '06 - How Long Is Forever';
			document.getElementById('song6feature').innerHTML = '';
			document.getElementById('song6_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song7title').innerHTML = '07 - Moonlight';
			document.getElementById('song7feature').innerHTML = '';
			document.getElementById('song7_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song8title').innerHTML = '08 - Psychoactive';
			document.getElementById('song8feature').innerHTML = '(featuring Lectro Dub)';
			document.getElementById('song8_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song9title').innerHTML = '09 - Waiting Games';
			document.getElementById('song9feature').innerHTML = '';
			document.getElementById('song9_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song10title').innerHTML = '10 - Run Away';
			document.getElementById('song10feature').innerHTML = '';
			document.getElementById('song10_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song11title').innerHTML = '11 - I Could Believe You';
			document.getElementById('song11feature').innerHTML = '(featuring Glaze)';
			document.getElementById('song11_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song12title').innerHTML = '12 - Floating';
			document.getElementById('song12feature').innerHTML = '';
			document.getElementById('song12_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song13title').innerHTML = '';
			document.getElementById('song13feature').innerHTML = '';
			document.getElementById('song13_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song14title').innerHTML = '';
			document.getElementById('song14feature').innerHTML = '';
			document.getElementById('song14_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song15title').innerHTML = '';
			document.getElementById('song15feature').innerHTML = '';
			document.getElementById('song15_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('discography_bandcamp').href = 'http://music.soundoftheaviators.com/album/a-song-that-never-ends';
			document.getElementById('discography_spotify').href = 'https://play.spotify.com/album/0McUrCOYO0vXjwGzvzeO8L';
			document.getElementById('discography_itunes').href = 'https://itunes.apple.com/gb/album/a-song-that-never-ends/id1184828804';
			document.getElementById('discography_googleplay').href = 'https://play.google.com/store/music/album/Aviators_A_Song_That_Never_Ends?id=Bwlgmmce7jcdvng6gwtnvlwks7e&hl=en_GB';
			
			document.getElementById('discography_bandcamp').style.display = 'block';
			document.getElementById('discography_spotify').style.display = 'block';
			document.getElementById('discography_itunes').style.display = 'block';
			document.getElementById('discography_googleplay').style.display = 'block';
			
			document.getElementById('discographyAudio').src ='https://p4.bcbits.com/download/track/b763850bec8ed9c6f9312ed7fe3e110f/mp3-v0/735027416?fsig=21dbc94fb41e299d837efad9997ab80a&id=735027416&stream=1&ts=1484496000.0&token=1484496060_5b313a86b3211c62ac63786e4f7bbc8a4752c3ef';
			
			var selectedSong = document.getElementsByClassName("song");
    		for (var i = 0; i < selectedSong.length; i++) {
				var highlight = selectedSong[i];
				if (highlight.classList.contains('selected')) {
				highlight.classList.remove('selected');
				}
			}
			document.getElementById('song11').classList.toggle("selected");
			
			break;
		case 2:
			document.getElementById('albumText').style.color = "white";
			
			document.getElementById('albumTitle').innerHTML = 'STARGAZERS';
			document.getElementById('albumDate').innerHTML = 'MARCH 8, 2016';
			
			document.getElementById('song1title').innerHTML = '01 - Stargazers';
			document.getElementById('song1feature').innerHTML = '';
			document.getElementById('song1_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song2title').innerHTML = '02 - Oblivion';
			document.getElementById('song2feature').innerHTML = '';
			document.getElementById('song2_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song3title').innerHTML = '03 - Welcome To Paradise';
			document.getElementById('song3feature').innerHTML = '';
			document.getElementById('song3_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song4title').innerHTML = '04 - Apocalypse State of Mind';
			document.getElementById('song4feature').innerHTML = '';
			document.getElementById('song4_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song5title').innerHTML = '05 - Immortal';
			document.getElementById('song5feature').innerHTML = '';
			document.getElementById('song5_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song6title').innerHTML = '06 - Chaos Theory';
			document.getElementById('song6feature').innerHTML = '';
			document.getElementById('song6_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song7title').innerHTML = '07 - Wolves';
			document.getElementById('song7feature').innerHTML = '';
			document.getElementById('song7_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song8title').innerHTML = '08 - Game Over';
			document.getElementById('song8feature').innerHTML = '';
			document.getElementById('song8_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song9title').innerHTML = '09 - Ammunition';
			document.getElementById('song9feature').innerHTML = '';
			document.getElementById('song9_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song10title').innerHTML = "10 - Who's Going To Stop Me Now?";
			document.getElementById('song10feature').innerHTML = '';
			document.getElementById('song10_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song11title').innerHTML = '11 - Meet You At The End';
			document.getElementById('song11feature').innerHTML = '';
			document.getElementById('song11_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song12title').innerHTML = '12 - Requiem For The Hunter';
			document.getElementById('song12feature').innerHTML = '';
			document.getElementById('song12_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song13title').innerHTML = '13 - Losing Control';
			document.getElementById('song13feature').innerHTML = '';
			document.getElementById('song13_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song14title').innerHTML = '14 - Acid Rain';
			document.getElementById('song14feature').innerHTML = '(featuring Tarby)';
			document.getElementById('song14_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song15title').innerHTML = '15 - Remains';
			document.getElementById('song15feature').innerHTML = '';
			document.getElementById('song15_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('discography_bandcamp').href = 'http://music.soundoftheaviators.com/album/stargazers';
			document.getElementById('discography_spotify').href = 'https://play.spotify.com/album/6exdiNzcFf8NsR8hw8hmr3';
			document.getElementById('discography_itunes').href = 'https://itunes.apple.com/gb/album/stargazers/id1091650455';
			document.getElementById('discography_googleplay').href = 'https://play.google.com/store/music/album/Aviators_Stargazers?id=Bhgicq4upfywpb5silvbc5yi5ia&hl=en_GB';
			
			document.getElementById('discography_bandcamp').style.display = 'block';
			document.getElementById('discography_spotify').style.display = 'block';
			document.getElementById('discography_itunes').style.display = 'block';
			document.getElementById('discography_googleplay').style.display = 'block';
			
			document.getElementById('discographyAudio').src ='https://popplers5.bandcamp.com/download/track?enc=mp3-v0&fsig=b63f887bf60ced191b52ddcde8a85267&id=3965551318&stream=1&ts=1484493439.0';
			
			var selectedSong = document.getElementsByClassName("song");
    		for (var i = 0; i < selectedSong.length; i++) {
				var highlight = selectedSong[i];
				if (highlight.classList.contains('selected')) {
				highlight.classList.remove('selected');
				}
			}
			document.getElementById('song9').classList.toggle("selected");
			
			break;
		case 3:
			document.getElementById('albumText').style.color = "black";
			
			document.getElementById('albumTitle').innerHTML = 'FROM OCEANS TO SKIES';
			document.getElementById('albumDate').innerHTML = 'SEPTEMBER 8, 2015';
			
			document.getElementById('song1title').innerHTML = '01 - We Are Not Machines';
			document.getElementById('song1feature').innerHTML = '(featuring Lectro Dub)';
			document.getElementById('song1_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song2title').innerHTML = '02 - From Oceans To Skies';
			document.getElementById('song2feature').innerHTML = '(featuring Tarby)';
			document.getElementById('song2_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song3title').innerHTML = '03 - Wicked Wicked World';
			document.getElementById('song3feature').innerHTML = '';
			document.getElementById('song3_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song4title').innerHTML = '04 - Dragonheart';
			document.getElementById('song4feature').innerHTML = '';
			document.getElementById('song4_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song5title').innerHTML = '05 - Ignorance Is Bliss';
			document.getElementById('song5feature').innerHTML = '';
			document.getElementById('song5_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song6title').innerHTML = "06 - We'll Never Know";
			document.getElementById('song6feature').innerHTML = '';
			document.getElementById('song6_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song7title').innerHTML = '07 - This Means War';
			document.getElementById('song7feature').innerHTML = '(featuring SlyphStorm)';
			document.getElementById('song7_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song8title').innerHTML = '08 - The Monsters Under My Bed';
			document.getElementById('song8feature').innerHTML = '';
			document.getElementById('song8_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song9title').innerHTML = '09 - Writing On The Walls';
			document.getElementById('song9feature').innerHTML = '';
			document.getElementById('song9_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song10title').innerHTML = "10 - Promises";
			document.getElementById('song10feature').innerHTML = '';
			document.getElementById('song10_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song11title').innerHTML = '11 - Black Holes';
			document.getElementById('song11feature').innerHTML = '';
			document.getElementById('song11_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song12title').innerHTML = '12 - The Watcher';
			document.getElementById('song12feature').innerHTML = '';
			document.getElementById('song12_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song13title').innerHTML = '';
			document.getElementById('song13feature').innerHTML = '';
			document.getElementById('song13_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song14title').innerHTML = '';
			document.getElementById('song14feature').innerHTML = '';
			document.getElementById('song14_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song15title').innerHTML = '';
			document.getElementById('song15feature').innerHTML = '';
			document.getElementById('song15_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('discography_bandcamp').href = 'http://music.soundoftheaviators.com/album/from-oceans-to-skies';
			document.getElementById('discography_spotify').href = 'https://play.spotify.com/album/3w0wyO9gs8OvDtn23z5zeJ';
			document.getElementById('discography_itunes').href = 'https://itunes.apple.com/gb/album/from-oceans-to-skies/id1037381984';
			document.getElementById('discography_googleplay').href = 'https://play.google.com/store/music/album/Aviators_From_Oceans_to_Skies?id=B23tztrnc65s3sh6cwnb65arove&hl=en_GB';
			
			document.getElementById('discography_bandcamp').style.display = 'block';
			document.getElementById('discography_spotify').style.display = 'block';
			document.getElementById('discography_itunes').style.display = 'block';
			document.getElementById('discography_googleplay').style.display = 'block';
			
			document.getElementById('discographyAudio').src ='https://p4.bcbits.com/download/track/64cce14313e19cd7c32080825bd09fd7/mp3-v0/3747323458?fsig=e85774c9d0b05970cbddba52fdca1369&id=3747323458&stream=1&ts=1484496000.0&token=1484496060_a10c440c93b6a9b18344667b48f40a76b82bb658';
			
			var selectedSong = document.getElementsByClassName("song");
    		for (var i = 0; i < selectedSong.length; i++) {
				var highlight = selectedSong[i];
				if (highlight.classList.contains('selected')) {
				highlight.classList.remove('selected');
				}
			}
			document.getElementById('song1').classList.toggle("selected");
			
			break;
		case 4:
			document.getElementById('albumText').style.color = "black";
			
			document.getElementById('albumTitle').innerHTML = 'BUILDING BETTER WORLDS';
			document.getElementById('albumDate').innerHTML = 'DECEMBER 30, 2014';
			
			document.getElementById('song1title').innerHTML = '01 - Détruire';
			document.getElementById('song1feature').innerHTML = '';
			document.getElementById('song1_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song2title').innerHTML = '02 - Bulletproof';
			document.getElementById('song2feature').innerHTML = '';
			document.getElementById('song2_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song3title').innerHTML = '03 - Angels Fall The Farthest';
			document.getElementById('song3feature').innerHTML = '';
			document.getElementById('song3_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song4title').innerHTML = '04 - Heaven Knows';
			document.getElementById('song4feature').innerHTML = '';
			document.getElementById('song4_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song5title').innerHTML = '05 - Crash';
			document.getElementById('song5feature').innerHTML = '';
			document.getElementById('song5_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song6title').innerHTML = '06 - Statc';
			document.getElementById('song6feature').innerHTML = '';
			document.getElementById('song6_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song7title').innerHTML = '07 - This Is Not The End';
			document.getElementById('song7feature').innerHTML = '';
			document.getElementById('song7_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song8title').innerHTML = '08 - Pieces Of Me';
			document.getElementById('song8feature').innerHTML = '';
			document.getElementById('song8_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song9title').innerHTML = '09 - Secret Identity';
			document.getElementById('song9feature').innerHTML = '';
			document.getElementById('song9_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song10title').innerHTML = '10 - Blur The Line';
			document.getElementById('song10feature').innerHTML = '';
			document.getElementById('song10_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song11title').innerHTML = '11 - The Surface';
			document.getElementById('song11feature').innerHTML = '(featuring GatoPaint)';
			document.getElementById('song11_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song12title').innerHTML = '12 - Building Better World';
			document.getElementById('song12feature').innerHTML = '';
			document.getElementById('song12_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song13title').innerHTML = '13 - Snowblind';
			document.getElementById('song13feature').innerHTML = '';
			document.getElementById('song13_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song14title').innerHTML = '14 - Rebâtir (Freedom Cry)';
			document.getElementById('song14feature').innerHTML = '';
			document.getElementById('song14_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song15title').innerHTML = '';
			document.getElementById('song15feature').innerHTML = '';
			document.getElementById('song15_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('discography_bandcamp').href = 'http://music.soundoftheaviators.com/album/building-better-worlds';
			document.getElementById('discography_spotify').href = 'https://play.spotify.com/album/6GVJx4c0IDwML1Sadw0oOZ';
			document.getElementById('discography_itunes').href = 'https://itunes.apple.com/gb/album/building-better-worlds/id956571369';
			document.getElementById('discography_googleplay').href = 'https://play.google.com/store/music/album/Aviators_Building_Better_Worlds?id=Bmwnmwkrield5xmffwnkjdxw7we&hl=en_GB';
			
			document.getElementById('discography_bandcamp').style.display = 'block';
			document.getElementById('discography_spotify').style.display = 'block';
			document.getElementById('discography_itunes').style.display = 'block';
			document.getElementById('discography_googleplay').style.display = 'block';
			
			document.getElementById('discographyAudio').src ='https://popplers5.bandcamp.com/download/track?enc=mp3-v0&fsig=4bdb786249f03eb24e9f02f3238212bc&id=367534462&stream=1&ts=1484493077.0';
			
			var selectedSong = document.getElementsByClassName("song");
    		for (var i = 0; i < selectedSong.length; i++) {
				var highlight = selectedSong[i];
				if (highlight.classList.contains('selected')) {
				highlight.classList.remove('selected');
				}
			}
			document.getElementById('song13').classList.toggle("selected");
			
			break;
		case 5:
			document.getElementById('albumText').style.color = "white";
			
			document.getElementById('albumTitle').innerHTML = 'GHOSTS IN THE CODE';
			document.getElementById('albumDate').innerHTML = 'JULY 1, 2014';
			
			document.getElementById('song1title').innerHTML = '01 - Red';
			document.getElementById('song1feature').innerHTML = '';
			document.getElementById('song1_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song2title').innerHTML = '02 - Restless';
			document.getElementById('song2feature').innerHTML = '';
			document.getElementById('song2_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song3title').innerHTML = '03 - Upside Down';
			document.getElementById('song3feature').innerHTML = '';
			document.getElementById('song3_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song4title').innerHTML = '04 - Set Me Free';
			document.getElementById('song4feature').innerHTML = '';
			document.getElementById('song4_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song5title').innerHTML = '05 - Revenge';
			document.getElementById('song5feature').innerHTML = '';
			document.getElementById('song5_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song6title').innerHTML = '06 - Something To Give (All Of Me)';
			document.getElementById('song6feature').innerHTML = '';
			document.getElementById('song6_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song7title').innerHTML = '07 - Ghosts In The Code';
			document.getElementById('song7feature').innerHTML = '';
			document.getElementById('song7_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song8title').innerHTML = '08 - Clockwork';
			document.getElementById('song8feature').innerHTML = '';
			document.getElementById('song8_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song9title').innerHTML = '09 - Slice Of Life';
			document.getElementById('song9feature').innerHTML = '';
			document.getElementById('song9_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song10title').innerHTML = '10 - The Party Song';
			document.getElementById('song10feature').innerHTML = '';
			document.getElementById('song10_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song11title').innerHTML = "11 - Fool's Gold";
			document.getElementById('song11feature').innerHTML = '';
			document.getElementById('song11_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song12title').innerHTML = '12 - Reach (All Along)';
			document.getElementById('song12feature').innerHTML = '(featuring 4everfreebrony)';
			document.getElementById('song12_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song13title').innerHTML = '';
			document.getElementById('song13feature').innerHTML = '';
			document.getElementById('song13_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song14title').innerHTML = '';
			document.getElementById('song14feature').innerHTML = '';
			document.getElementById('song14_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song15title').innerHTML = '';
			document.getElementById('song15feature').innerHTML = '';
			document.getElementById('song15_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('discography_bandcamp').href = 'http://music.soundoftheaviators.com/album/ghosts-in-the-code';
			document.getElementById('discography_spotify').href = 'https://play.spotify.com/album/3pNZtWUF0jYIl7epMp8Qcz';
			document.getElementById('discography_itunes').href = 'https://itunes.apple.com/gb/album/ghosts-in-the-code/id892424306';
			document.getElementById('discography_googleplay').href = 'https://play.google.com/store/music/album/Aviators_Ghosts_in_the_Code?id=Bzxro32aspbhlsvczdvcykli3vi&hl=en_GB';
			
			document.getElementById('discography_bandcamp').style.display = 'block';
			document.getElementById('discography_spotify').style.display = 'block';
			document.getElementById('discography_itunes').style.display = 'block';
			document.getElementById('discography_googleplay').style.display = 'block';
			
			document.getElementById('discographyAudio').src ='http://p4.bcbits.com/download/track/0a7e3c00f1b0806bb80e5b065dbfa6b5/mp3-128/152529022?fsig=2da40dd1d9d2418d80ff79e721034ce8&id=152529022&stream=1&ts=1484496000.0&token=1484496060_2816af7061ad5ec1782c51536d540e577655d67d';
			
			var selectedSong = document.getElementsByClassName("song");
    		for (var i = 0; i < selectedSong.length; i++) {
				var highlight = selectedSong[i];
				if (highlight.classList.contains('selected')) {
				highlight.classList.remove('selected');
				}
			}
			document.getElementById('song3').classList.toggle("selected");
			
			break;
		case 6:
			document.getElementById('albumText').style.color = "white";
			
			document.getElementById('albumTitle').innerHTML = 'MIRRORS';
			document.getElementById('albumDate').innerHTML = 'OCTOBER 8, 2013';
			
			document.getElementById('song1title').innerHTML = '01 - Open Your Eyes';
			document.getElementById('song1feature').innerHTML = '';
			document.getElementById('song1_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song2title').innerHTML = '02 - Someone Like Me';
			document.getElementById('song2feature').innerHTML = '';
			document.getElementById('song2_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song3title').innerHTML = '03 - Zero';
			document.getElementById('song3feature').innerHTML = '';
			document.getElementById('song3_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song4title').innerHTML = '04 - You Found Me';
			document.getElementById('song4feature').innerHTML = '(featuring Replacer)';
			document.getElementById('song4_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song5title').innerHTML = '05 - Angels And Demons';
			document.getElementById('song5feature').innerHTML = '(featuring Feather)';
			document.getElementById('song5_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song6title').innerHTML = '06 - Ashes';
			document.getElementById('song6feature').innerHTML = '';
			document.getElementById('song6_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song7title').innerHTML = '07 - Momentum';
			document.getElementById('song7feature').innerHTML = '';
			document.getElementById('song7_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song8title').innerHTML = '08 - Mirrors';
			document.getElementById('song8feature').innerHTML = '(featuring PrinceWhateverer)';
			document.getElementById('song8_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song9title').innerHTML = '09 - Rock The World';
			document.getElementById('song9feature').innerHTML = '';
			document.getElementById('song9_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song10title').innerHTML = '10 - Where I Belong';
			document.getElementById('song10feature').innerHTML = '';
			document.getElementById('song10_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song11title').innerHTML = '';
			document.getElementById('song11feature').innerHTML = '';
			document.getElementById('song11_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song12title').innerHTML = '';
			document.getElementById('song12feature').innerHTML = '';
			document.getElementById('song12_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song13title').innerHTML = '';
			document.getElementById('song13feature').innerHTML = '';
			document.getElementById('song13_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song14title').innerHTML = '';
			document.getElementById('song14feature').innerHTML = '';
			document.getElementById('song14_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song15title').innerHTML = '';
			document.getElementById('song15feature').innerHTML = '';
			document.getElementById('song15_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('discography_bandcamp').href = 'http://music.soundoftheaviators.com/album/mirrors-deluxe-version';
			document.getElementById('discography_spotify').href = 'https://play.spotify.com/album/2OkY4ZX1Pqw96ZyYBimTvw';
			document.getElementById('discography_itunes').href = 'https://itunes.apple.com/gb/album/mirrors/id723225135';
			document.getElementById('discography_googleplay').href = 'https://play.google.com/store/music/album/Aviators_Mirrors?id=B4avgfdgxck54adku5yjntn4sca&hl=en_GB';
			
			document.getElementById('discography_bandcamp').style.display = 'block';
			document.getElementById('discography_spotify').style.display = 'block';
			document.getElementById('discography_itunes').style.display = 'block';
			document.getElementById('discography_googleplay').style.display = 'block';
			
			document.getElementById('discographyAudio').src = 'http://p4.bcbits.com/download/track/bbdc092a9afcf25f718d249da5776ef2/mp3-128/2622227359?fsig=804ae54bc154864d7050ba4952137adf&id=2622227359&stream=1&ts=1484496000.0&token=1484496060_c1356eb89b1918179a49a98436e02f9e827f93cf';
			
			var selectedSong = document.getElementsByClassName("song");
    		for (var i = 0; i < selectedSong.length; i++) {
				var highlight = selectedSong[i];
				if (highlight.classList.contains('selected')) {
				highlight.classList.remove('selected');
				}
			}
			document.getElementById('song7').classList.toggle("selected");
			
			break;
		case 7:
			document.getElementById('albumText').style.color = "black";
			
			document.getElementById('albumTitle').innerHTML = 'FROM ALL SIDES';
			document.getElementById('albumDate').innerHTML = 'APRIL 22, 2013';
			
			document.getElementById('song1title').innerHTML = '01 - Synthesia';
			document.getElementById('song1feature').innerHTML = '';
			document.getElementById('song1_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song2title').innerHTML = '02 - Shadows';
			document.getElementById('song2feature').innerHTML = '(featuring Glaze)';
			document.getElementById('song2_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song3title').innerHTML = '03 - From All Sides';
			document.getElementById('song3feature').innerHTML = '(featuring Bronyfied)';
			document.getElementById('song3_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song4title').innerHTML = '04 - Constellations';
			document.getElementById('song4feature').innerHTML = '';
			document.getElementById('song4_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song5title').innerHTML = '05 - More Than Meets The Eye';
			document.getElementById('song5feature').innerHTML = '';
			document.getElementById('song5_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song6title').innerHTML = '06 - Far From Me';
			document.getElementById('song6feature').innerHTML = '';
			document.getElementById('song6_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song7title').innerHTML = '07 - Voices Of The Crowd';
			document.getElementById('song7feature').innerHTML = '';
			document.getElementById('song7_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song8title').innerHTML = '08 - Storm';
			document.getElementById('song8feature').innerHTML = '';
			document.getElementById('song8_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song9title').innerHTML = '09 - Lights';
			document.getElementById('song9feature').innerHTML = '(featuring Feather)';
			document.getElementById('song9_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song10title').innerHTML = '10 - Bring Me Back To Life';
			document.getElementById('song10feature').innerHTML = '(featuring Vortex and Yelling At Cats)';
			document.getElementById('song10_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song11title').innerHTML = '11 - Heroes';
			document.getElementById('song11feature').innerHTML = '(featuring Bronyfied)';
			document.getElementById('song11_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song12title').innerHTML = '';
			document.getElementById('song12feature').innerHTML = '';
			document.getElementById('song12_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song13title').innerHTML = '';
			document.getElementById('song13feature').innerHTML = '';
			document.getElementById('song13_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song14title').innerHTML = '';
			document.getElementById('song14feature').innerHTML = '';
			document.getElementById('song14_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song15title').innerHTML = '';
			document.getElementById('song15feature').innerHTML = '';
			document.getElementById('song15_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('discography_bandcamp').href = 'http://music.soundoftheaviators.com/album/from-all-sides-deluxe-version';
			document.getElementById('discography_spotify').href = 'https://play.spotify.com/album/3QjIPB8ypghSSgeCsV4BsN';
			document.getElementById('discography_itunes').href = 'https://itunes.apple.com/gb/album/from-all-sides/id638255179';
			document.getElementById('discography_googleplay').href = 'https://play.google.com/store/music/album/Aviators_From_All_Sides?id=Bz6g6pxzbd7ryb7ci57ec46rsjy&hl=en_GB';
			
			document.getElementById('discography_bandcamp').style.display = 'block';
			document.getElementById('discography_spotify').style.display = 'block';
			document.getElementById('discography_itunes').style.display = 'block';
			document.getElementById('discography_googleplay').style.display = 'block';
			
			document.getElementById('discographyAudio').src ='http://p4.bcbits.com/download/track/bcce2c7bcc549aa71bdb3763c13bc602/mp3-128/766208918?fsig=757e9e4d61c084b1d2aa5be4775a957d&id=766208918&stream=1&ts=1484496000.0&token=1484496060_e27fda7e5730b4435219648d8339c26533566665';
			
			var selectedSong = document.getElementsByClassName("song");
    		for (var i = 0; i < selectedSong.length; i++) {
				var highlight = selectedSong[i];
				if (highlight.classList.contains('selected')) {
				highlight.classList.remove('selected');
				}
			}
			document.getElementById('song4').classList.toggle("selected");
			
			break;
		case 8:
			document.getElementById('albumText').style.color = "white";
			
			document.getElementById('albumTitle').innerHTML = 'AETERNO';
			document.getElementById('albumDate').innerHTML = 'APRIL 6, 2013';
			
			document.getElementById('song1title').innerHTML = '01 - Aeterno';
			document.getElementById('song1feature').innerHTML = '';
			document.getElementById('song1_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song2title').innerHTML = '02 - Escaping Darkness';
			document.getElementById('song2feature').innerHTML = '';
			document.getElementById('song2_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song3title').innerHTML = '03 - Broken Planet';
			document.getElementById('song3feature').innerHTML = '';
			document.getElementById('song3_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song4title').innerHTML = '04 - Labyrinthine';
			document.getElementById('song4feature').innerHTML = '';
			document.getElementById('song4_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song5title').innerHTML = '05 - Haunted';
			document.getElementById('song5feature').innerHTML = '';
			document.getElementById('song5_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song6title').innerHTML = '06 - Find Me';
			document.getElementById('song6feature').innerHTML = '';
			document.getElementById('song6_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song7title').innerHTML = '07 - Kill Switch';
			document.getElementById('song7feature').innerHTML = '';
			document.getElementById('song7_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song8title').innerHTML = '08 - Iron Horizon';
			document.getElementById('song8feature').innerHTML = '';
			document.getElementById('song8_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song9title').innerHTML = "09 - I'll Find You";
			document.getElementById('song9feature').innerHTML = '';
			document.getElementById('song9_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song10title').innerHTML = "10 - I'll Find You, Part 2";
			document.getElementById('song10feature').innerHTML = '(featuring Vortex)';
			document.getElementById('song10_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song11title').innerHTML = '11 - Cloud Ocean';
			document.getElementById('song11feature').innerHTML = '';
			document.getElementById('song11_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song12title').innerHTML = '12 - His Arrival';
			document.getElementById('song12feature').innerHTML = '';
			document.getElementById('song12_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song13title').innerHTML = "13 - The Ticketmaster's Waltz";
			document.getElementById('song13feature').innerHTML = '';
			document.getElementById('song13_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song14title').innerHTML = '14 - The Path Home';
			document.getElementById('song14feature').innerHTML = '';
			document.getElementById('song14_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song15title').innerHTML = '15 - Absolution';
			document.getElementById('song15feature').innerHTML = '';
			document.getElementById('song15_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('discography_bandcamp').href = 'http://music.soundoftheaviators.com/album/aeterno';
			document.getElementById('discography_spotify').href = 'https://play.spotify.com/album/0tVYhReBmzpA81JproDO3W';
			document.getElementById('discography_itunes').href = 'https://itunes.apple.com/gb/album/aeterno/id633597298';
			document.getElementById('discography_googleplay').href = 'https://play.google.com/store/music/album/Aviators_Aeterno?id=Bokc3qfisqasay6ts22yboxudku&hl=en_GB';
			
			document.getElementById('discography_bandcamp').style.display = 'block';
			document.getElementById('discography_spotify').style.display = 'block';
			document.getElementById('discography_itunes').style.display = 'block';
			document.getElementById('discography_googleplay').style.display = 'block';
			
			document.getElementById('discographyAudio').src ='http://p4.bcbits.com/download/track/a8e4296129f3f30d3b31d4b0dc1b3502/mp3-128/2235397330?fsig=d3a614b7d0a6e9f913007c65c088b18c&id=2235397330&stream=1&ts=1484496000.0&token=1484496060_c7d8a35dcb4b4cc648c8a9d477d6c5615850cb81';
			
			var selectedSong = document.getElementsByClassName("song");
    		for (var i = 0; i < selectedSong.length; i++) {
				var highlight = selectedSong[i];
				if (highlight.classList.contains('selected')) {
				highlight.classList.remove('selected');
				}
			}
			document.getElementById('song9').classList.toggle("selected");
			
			break;
		case 9:
			document.getElementById('albumText').style.color = "white";
			
			document.getElementById('albumTitle').innerHTML = 'THE ADVENTURE';
			document.getElementById('albumDate').innerHTML = 'FEBRUARY 29, 2012';
			
			document.getElementById('song1title').innerHTML = '01 - The Adventure';
			document.getElementById('song1feature').innerHTML = '';
			document.getElementById('song1_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song2title').innerHTML = '02 - Second Chances';
			document.getElementById('song2feature').innerHTML = '';
			document.getElementById('song2_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song3title').innerHTML = '03 - Cloudsdale Streets';
			document.getElementById('song3feature').innerHTML = '';
			document.getElementById('song3_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song4title').innerHTML = '04 - Just Like You';
			document.getElementById('song4feature').innerHTML = '';
			document.getElementById('song4_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song5title').innerHTML = '05 - If You Only Knew';
			document.getElementById('song5feature').innerHTML = '';
			document.getElementById('song5_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song6title').innerHTML = '06 - Never Back Down';
			document.getElementById('song6feature').innerHTML = '(featuring d.Notive and Yelling At Cats)';
			document.getElementById('song6_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song7title').innerHTML = '07 - Her Darker Side';
			document.getElementById('song7feature').innerHTML = '';
			document.getElementById('song7_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song8title').innerHTML = '08 - Never Meant To Be';
			document.getElementById('song8feature').innerHTML = '';
			document.getElementById('song8_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song9title').innerHTML = '09 - Canterlot 3000';
			document.getElementById('song9feature').innerHTML = '';
			document.getElementById('song9_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song10title').innerHTML = '10 - Spirit of Chaos';
			document.getElementById('song10feature').innerHTML = '';
			document.getElementById('song10_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song11title').innerHTML = '11 - Tonight';
			document.getElementById('song11feature').innerHTML = '';
			document.getElementById('song11_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song12title').innerHTML = '12 - One Last Letter';
			document.getElementById('song12feature').innerHTML = '(featuring Bronyfied)';
			document.getElementById('song12_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song13title').innerHTML = '13 - Friendship';
			document.getElementById('song13feature').innerHTML = '';
			document.getElementById('song13_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song14title').innerHTML = "14 - Believe (I'm Feeling Pinkie Keen)";
			document.getElementById('song14feature').innerHTML = '';
			document.getElementById('song14_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song15title').innerHTML = '';
			document.getElementById('song15feature').innerHTML = '';
			document.getElementById('song15_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('discography_bandcamp').href = 'http://music.soundoftheaviators.com/album/the-adventure';
			document.getElementById('discography_spotify').href = '#discography';
			document.getElementById('discography_itunes').href = '#discography';
			document.getElementById('discography_googleplay').href = '#discography';
			
			document.getElementById('discography_bandcamp').style.display = 'block';
			document.getElementById('discography_spotify').style.display = 'none';
			document.getElementById('discography_itunes').style.display = 'none';
			document.getElementById('discography_googleplay').style.display = 'none';
			
			document.getElementById('discographyAudio').src ='https://p4.bcbits.com/download/track/9c554770e83cbd793c6aa34209417903/mp3-v0/878784564?fsig=27e85720517c2c2d0966f5b5451ecdb5&id=878784564&stream=1&ts=1484496000.0&token=1484496060_740b229176dc2d3faa4749e4ec090e181c6b7e4a';
			
			var selectedSong = document.getElementsByClassName("song");
    		for (var i = 0; i < selectedSong.length; i++) {
				var highlight = selectedSong[i];
				if (highlight.classList.contains('selected')) {
				highlight.classList.remove('selected');
				}
			}
			document.getElementById('song13').classList.toggle("selected");
			
			break;
		case 10:
			document.getElementById('albumText').style.color = "white";
			
			document.getElementById('albumTitle').innerHTML = 'REFLECTIONS OF A DREAM';
			document.getElementById('albumDate').innerHTML = 'DECEMBER 20, 2011';
			
			document.getElementById('song1title').innerHTML = '01 - The First Word';
			document.getElementById('song1feature').innerHTML = '';
			document.getElementById('song1_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song2title').innerHTML = '02 - Storm';
			document.getElementById('song2feature').innerHTML = '';
			document.getElementById('song2_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song3title').innerHTML = '03 - Nightmare';
			document.getElementById('song3feature').innerHTML = '';
			document.getElementById('song3_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song4title').innerHTML = '04 - Fourth';
			document.getElementById('song4feature').innerHTML = '';
			document.getElementById('song4_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song5title').innerHTML = '05 - Worlds Collide';
			document.getElementById('song5feature').innerHTML = '';
			document.getElementById('song5_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song6title').innerHTML = '06 - Finally Awake';
			document.getElementById('song6feature').innerHTML = '';
			document.getElementById('song6_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song7title').innerHTML = '07 - Reflections Of A Dream';
			document.getElementById('song7feature').innerHTML = '';
			document.getElementById('song7_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song8title').innerHTML = '08 - Someday';
			document.getElementById('song8feature').innerHTML = '';
			document.getElementById('song8_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song9title').innerHTML = '09 - Reflections Of A Dream, Part 2';
			document.getElementById('song9feature').innerHTML = '';
			document.getElementById('song9_lyrics_button').src = 'assets/images/lyrics_button.png';
			
			document.getElementById('song10title').innerHTML = '';
			document.getElementById('song10feature').innerHTML = '';
			document.getElementById('song10_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song11title').innerHTML = '';
			document.getElementById('song11feature').innerHTML = '';
			document.getElementById('song11_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song12title').innerHTML = '';
			document.getElementById('song12feature').innerHTML = '';
			document.getElementById('song12_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song13title').innerHTML = '';
			document.getElementById('song13feature').innerHTML = '';
			document.getElementById('song13_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song14title').innerHTML = '';
			document.getElementById('song14feature').innerHTML = '';
			document.getElementById('song14_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song15title').innerHTML = '';
			document.getElementById('song15feature').innerHTML = '';
			document.getElementById('song15_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('discography_bandcamp').href = '#discography';
			document.getElementById('discography_spotify').href = '#discography';
			document.getElementById('discography_itunes').href = '#discography';
			document.getElementById('discography_googleplay').href = '#discography';
			
			document.getElementById('discography_bandcamp').style.display = 'none';
			document.getElementById('discography_spotify').style.display = 'none';
			document.getElementById('discography_itunes').style.display = 'none';
			document.getElementById('discography_googleplay').style.display = 'none';
			
			document.getElementById('discographyAudio').src ='assets/audio/reflections_of_a_dream_sample.mp3';
			
			var selectedSong = document.getElementsByClassName("song");
    		for (var i = 0; i < selectedSong.length; i++) {
				var highlight = selectedSong[i];
				if (highlight.classList.contains('selected')) {
				highlight.classList.remove('selected');
				}
			}
			document.getElementById('song1').classList.toggle("selected");
			
			break;
		case 11:
			document.getElementById('albumText').style.color = "white";
			
			document.getElementById('albumTitle').innerHTML = 'NEVER SAY FOREVER';
			document.getElementById('albumDate').innerHTML = 'EARLY 2011';
			
			document.getElementById('song1title').innerHTML = '01 - Awakening';
			document.getElementById('song1feature').innerHTML = '';
			document.getElementById('song1_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song2title').innerHTML = '02 - Closer';
			document.getElementById('song2feature').innerHTML = '';
			document.getElementById('song2_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song3title').innerHTML = '03 - Not The Same';
			document.getElementById('song3feature').innerHTML = '';
			document.getElementById('song3_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song4title').innerHTML = '04 - Nothing Means Anything';
			document.getElementById('song4feature').innerHTML = '';
			document.getElementById('song4_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song5title').innerHTML = '05 - Powder';
			document.getElementById('song5feature').innerHTML = '';
			document.getElementById('song5_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song6title').innerHTML = '06 - ROFL';
			document.getElementById('song6feature').innerHTML = '';
			document.getElementById('song6_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song7title').innerHTML = '07 - Sky Lights';
			document.getElementById('song7feature').innerHTML = '';
			document.getElementById('song7_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song8title').innerHTML = '08 - The Snowball Effect';
			document.getElementById('song8feature').innerHTML = '';
			document.getElementById('song8_lyrics_button').src = 'assets/images/instrumental_button.png';
			
			document.getElementById('song9title').innerHTML = '';
			document.getElementById('song9feature').innerHTML = '';
			document.getElementById('song9_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song10title').innerHTML = '';
			document.getElementById('song10feature').innerHTML = '';
			document.getElementById('song10_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song11title').innerHTML = '';
			document.getElementById('song11feature').innerHTML = '';
			document.getElementById('song11_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song12title').innerHTML = '';
			document.getElementById('song12feature').innerHTML = '';
			document.getElementById('song12_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song13title').innerHTML = '';
			document.getElementById('song13feature').innerHTML = '';
			document.getElementById('song13_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song14title').innerHTML = '';
			document.getElementById('song14feature').innerHTML = '';
			document.getElementById('song14_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('song15title').innerHTML = '';
			document.getElementById('song15feature').innerHTML = '';
			document.getElementById('song15_lyrics_button').src = 'assets/images/transparent.png';
			
			document.getElementById('discography_bandcamp').href = '#discography';
			document.getElementById('discography_spotify').href = '#discography';
			document.getElementById('discography_itunes').href = '#discography';
			document.getElementById('discography_googleplay').href = '#discography';
		
			document.getElementById('discography_bandcamp').style.display = 'none';
			document.getElementById('discography_spotify').style.display = 'none';
			document.getElementById('discography_itunes').style.display = 'none';
			document.getElementById('discography_googleplay').style.display = 'none';
			
			document.getElementById('discographyAudio').src ='assets/audio/never_say_forever_sample.mp3';
			
			var selectedSong = document.getElementsByClassName("song");
    		for (var i = 0; i < selectedSong.length; i++) {
				var highlight = selectedSong[i];
				if (highlight.classList.contains('selected')) {
				highlight.classList.remove('selected');
				}
			}
			document.getElementById('song3').classList.toggle("selected");
	}
}
function discographyEpTracklist(number){
	
}
function discographySingleTracklist(number){
	
}
function discographyCompilationTracklist(number){
	
}