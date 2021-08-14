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
  for (let i of someCollection){ // looping through array
    console.log(i.title + ' by ' + i.artist + ', published in the year ' + i.year +':'); //logging each property
    for (let j=0; j < i.trackName.length; j++){ // withing each item, looping to log tracks arrays
      console.log((j+1) + '. ' + i.trackName[j] + ': ' + i.time[j]);
    }
  }
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
console.log('testing findByArtist, searching Led Zeppelin - expect 2', findByArtist('Led Zeppelin'));
console.log('testing findByArtist, searching Cory Wong - expect 2', findByArtist('Cory Wong'));
console.log('testing findByArtist, searching Stevie Wonder - expect 0', findByArtist('Stevie Wonder'));
// Stretch goals

function isEmpty (someObject){ //function to check the properties of an object
  console.log('in isEmpty', someObject);
  let checkArr = []; //creating new array to store properties
  for (let i in someObject){ // found out through trial and error that for in loop works here, when for of and longhand for-loop did not work... because properties are passed by reference? I'm not sure.
    checkArr.push(i);
    console.log('found this', i);
  }
  return (checkArr.length === 0) ? true : false; // if array length is still 0, object is empty
} // end isEmpty
 console.log('testing isEmpty - expect false', isEmpty({artist: "Steely Dan", year: 1975}));

function search(searchObject){// The phrasing from the assignment page confused me a bit here, so I kept it in the comments below for reference
// Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
// { artist: 'Ray Charles', year: 1957 }
  console.log('in search', typeof arguments);
  if (arguments.length === 0 || isEmpty(searchObject)){ // either no arguments provided, or the object provided is empty
    return collection;
  } // Just give em their pick of everything
  let searchResults = [];// If no results are found, empty array is returned.
  for (let index of collection) { // looping through collection array
    for (let t = 0; t < index.trackName.length; t++){ // *STRETCH* looping each objects trackName array
      if (searchObject.trackName === index.trackName[t]) { //assuming search input is in object format...
        searchResults.push(index); //bump it to the end of results
      }
    }
    if (index.artist === searchObject.artist && index.year === searchObject.year){ // same as above, but looking for artist and year together
      searchResults.push(index);
    }
  }

  return searchResults;// Returning new array of all items in the collection matching all of the search criteria.
}// end search
let emptyThing = {};
console.log('testing isEmpty - expect true', isEmpty(emptyThing));
console.log('testing search, should see all albums in collection', search(emptyThing)); //Couldn't figure out how to get this to return all albums
console.log('testing search, should see all albums in collection', search());
console.log('testing search, should see empty array', search('glkjd', 2021));
console.log('testing search, should see "Houses of the Holy"', search({artist: 'Led Zeppelin', year: 1973}));
console.log('track search Uh Uh - expect to see Thundercat Drunk', search({trackName: "Uh Uh"}));
