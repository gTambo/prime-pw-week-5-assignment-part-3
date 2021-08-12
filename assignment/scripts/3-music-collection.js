console.log('***** Music Collection *****')
 /* Update the 3-music-collection.js file to do the following:

While working through the features below, make sure to commit after you complete a task! Your commit message should reflect what you added or changed since the previous commit.*/

//Required Features
// Create a variable collection that starts as an empty array.
let collection = [];
// Add a function named addToCollection. This function should:
function addToCollection(title, artist, yearPublished){// Take in the album's title, artist, yearPublished as input parameters
  console.log('in addToCollection', title, artist, yearPublished);
  const album = {// Create a new object having the above properties
    title: title,
    artist: artist,
    year: yearPublished
  };
  collection.push(album);// Add the new object to the end of the collection array
  return album;// Return the newly created object
} // end addToCollection

// Test the addToCollection function:
console.log('added: ', addToCollection('Led Zeppelin I', 'Led Zeppelin', 1969));

// Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
// Console.log each album as added using the returned value.
console.log('added: ', addToCollection('Houses Of the Holy', 'Led Zeppelin', 1973));
console.log('added: ', addToCollection('Feel.', 'Scary Goldings', 2020));
console.log('added: ', addToCollection('Drunk', 'Thundercat', 2017));
console.log('added: ', addToCollection('Katy Lied', 'Steely Dan', 1975));
console.log('added: ', addToCollection('My First Car-EP', 'Vulfpeck', 2013));
console.log('added: ', addToCollection('The Striped Album', 'Cory Wong', 2020));
// After all are added, console.log the collection array.
console.log(collection);

// Add a function named showCollection. This function should:
function showCollection(array){// Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
  console.log('in showCollection', array);
  console.log('Total Albums:', array.length);// Console.log the number of items in the array.
  for (let i of array){
    console.log(i.title + ' by ' + i.artist + ', published in the year ' + i.year);
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

function search(objectArtist, objectYear){// Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
// { artist: 'Ray Charles', year: 1957 }
// The returned output from search should meet these requirements:
  if (arguments.length === 0){
    return collection;
  }
  else if (arguments === undefined){
    return collection;
  }// If there is no search object or an empty search object provided as input, then return all albums in the collection.
  let searchResults = [];// If no results are found, return an empty array.
  for (let i of collection) {
    if (i.artist == objectArtist && i.year == objectYear){
      searchResults.push(i);
    }
  }
  return searchResults;// Return a new array of all items in the collection matching all of the search criteria.
}// end search
let emptyObject;
console.log('testing search, should see all albums in collection', search(emptyObject));
console.log('testing search, should see all albums in collection', search());
console.log('testing search, should see "Houses of the Holy"', search('Led Zeppelin', 1973));

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
