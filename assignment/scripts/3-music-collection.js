console.log('***** Music Collection *****')
 /* Update the 3-music-collection.js file to do the following:

While working through the features below, make sure to commit after you complete a task! Your commit message should reflect what you added or changed since the previous commit.*/

//Required Features

let collection = []; // empty array collection

function addToCollection(title, artist, yearPublished, trackNames, durations){// Take in the album's title, artist, yearPublished as input parameters
  console.log('in addToCollection', title, artist, yearPublished, trackNames, durations);
  const album = {// Creating a new object with the above properties
    title: title,
    artist: artist,
    year: yearPublished,
    trackName: trackNames,
    time: durations
  };
  collection.push(album);// Adding  new object to the end of the collection array
  return album;// Returning the new object
} // end addToCollection

// Testing the addToCollection function:
console.log('added: ', addToCollection('Led Zeppelin I', 'Led Zeppelin', 1969, ['Good Times Bad Times', "Babe I'm gonna leave you", "You Shook Me", "Dazed and Confused", "Your Time Is Gonna Come", "Black Mountain Side", "Communication Breakdown", "I can't Quit You Baby", "How Many More Times"], ["2:46", "6:43", "6:28", "6:29", "4:35", "2:13", "2:30", "4:43", "8:28"]));

// Adding 6 more albums to my collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
// Console.log each album as added using the returned value.
console.log('added: ', addToCollection('Houses Of the Holy', 'Led Zeppelin', 1973, ["The Song Remains the Same", "The Rain Song", "Over the Hills and Far Away", "The Crunge", "Dancing Days", "D'yer Mak'er",  "No Quarter", "The Ocean"], ["5:29", "7:39", "4:51", "3:18", "3:43", "4:23", "7:03", "4:31"]));
console.log('added: ', addToCollection('Feel.', 'Scary Goldings', 2020, ["The Shakes", "Louis Cole Sucks (feat. Louis Cole)", "Equal Parts Timing and Romance", "Bondgirl"], ["3:47", "4:12", "3:21", "3:06"]));
console.log('added: ', addToCollection('Drunk', 'Thundercat', 2017, ["Rabbit Ho", "Captain Stupido", "Uh Uh", "DUI"], ["0:39", "1:42", "2:16", "2:18"]));
console.log('added: ', addToCollection('Katy Lied', 'Steely Dan', 1975, ["Black Friday", "Bad Sneakers", "Rose Darling", "Daddy don't live in that New York City no more", "Doctor Wu", "Everyone's Gone to the Movies", "Your Gold Teeth II", "Chain Lightning", "Any World (That I'm Welcome To)", "Throw Back the Little Ones"], ["3:41", "3:20", "3:04", "3:14", "3:55", "3:44", "4:12", "3:00", "3:54", "3:13"]));
console.log('added: ', addToCollection('My First Car-EP', 'Vulfpeck', 2013, ["Wait for the Moment", "The Birdwatcher", "The Speedwalker", "My First Car", "Kuhlmilch 74 BPM", "It Gets Funkier III"], ["3.51", "2:35", "2:28", "4:31", "2:11", "3:08"]));
console.log('added: ', addToCollection('The Striped Album', 'Cory Wong', 2020, ["Design (feat. Kimbra)", "Click Bait (feat. The Hornheads)"], ['3:37', '4:1']));
console.log('added: ', addToCollection('Trail Songs: Dusk', 'Cory Wong', 2020, ["Tomorrow and Forever", "Blackbird", "First Time I Saw the Milky Way", "One Man's Treasure", "The Life Cycle of a Butterfly", "Aurora", "Trail End"], ["4:05", "2:42", "3:53", "2:12", "3:41", "2:47", "2:47"]));
// After all are added, console.log the collection array.
console.log(collection);

// Add a function named showCollection. This function should:
function showCollection(someCollection){// Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
  console.log('in showCollection', someCollection);
  console.log('Total Albums:', someCollection.length);// Console.log the number of items in the array.
  for (let i of someCollection){
    console.log(i.title + ' by ' + i.artist + ', published in the year ' + i.year +':');
    for (let j=0; j < i.trackName.length; j++){
      console.log((j+1) + '. ' + i.trackName[j] + ': ' + i.time[j]);
    }
  }// Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.
} // end showCollection
// Test the showCollection function.
showCollection(collection);

// Add a function named findByArtist. This function should:
function findByArtist(artist){// Take in artist (a string) parameter
  console.log('in findByArtist', artist);
  let found = [];// Create an array to hold any results, empty to start
  for (let album of collection){
    if (album.artist === artist){
      found.push(album);
    }
  }// Loop through the collection and add any objects with a matching artist to the array.
  return found;// Return the array with the matching results. If no results are found, return an empty array.
}// end findByArtist

// Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
console.log('testing findByArtist, searching Led Zeppelin', findByArtist('Led Zeppelin'));

// When testing your functions, write all tests in the JavaScript file!

// Stretch goals
// Create a function called search. This function should:

function search(searchObject){// Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
// { artist: 'Ray Charles', year: 1957 }
// The returned output from search should meet these requirements:
  console.log('in search', typeof arguments);
  if (arguments.length === 0 || searchObject === {}){
    return collection;
  } // If there is no search object or an empty search object provided as input, then return all albums in the collection.
  let searchResults = [];// If no results are found, return an empty array.
  for (let index of collection) {
    if (index.artist === searchObject.artist && index.year === searchObject.year || index.trackName === searchObject.trackName){
      searchResults.push(index);
    }
  }
  return searchResults;// Return a new array of all items in the collection matching all of the search criteria.
}// end search
let emptyObject = {};
console.log('testing search, should see all albums in collection', search(emptyObject));
console.log('testing search, should see all albums in collection', search());
console.log('testing search, should see empty array', search('glkjd', 2021));
console.log('testing search, should see "Houses of the Holy"', search({artist: 'Led Zeppelin', year: 1973}));
// can I search just one parameter?
// Add an array of tracks to your album objects. Each track should have a name and duration. You will need to update the functions to support this new property:

// Update the addToCollection function to also take an input parameter for the array of tracks.
// Update search to allow a trackName search criteria.
// Update the showCollection function to display the list of tracks for each album with its name and duration.
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// Make sure to test all your code! */
