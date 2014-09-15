// Exercises: The DOM

// EXERCISE: The Logo Hijack

// No homepage is safe from the logo bandit!

// Open up www.google.com in Chrome or Firefox, and open up the console.
// Find the Google logo and store it in a variable.
// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// Find the Google search button and store it in a variable.
// Modify the text of the button so that it says "Yahooo!" instead.
document.getElementById('hplogo').style.backgroundImage = 'url(https://s.yimg.com/rz/d/yahoo_frontpage_en-CA_s_f_p_bestfit_frontpage.png)';
document.getElementById('gbqfsa').textContent = 'Yahooo!';

// EXERCISE: About Me
// Cuz every webpage needs an "About" section.
// Start with this HTML and save it as "aboutme.html":
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8"/>
//   <title>About Me</title>
// </head>
// <body>
//   <h1>About Me</h1>

//   <ul>
//     <li>Nickname: <span id="nickname"></span>
//     <li>Favorites:  <span id="favorites"></span>
//     <li>Hometown: <span id="hometown"></span>
//   </ul>

//  </body>
// </html>

// Add a script tag to the bottom.
// Change the body style so it has a font-family of "Arial, sans-serif".
// Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8"/>
  <title>About Me</title>
  <style type="text/css">
    h1 {color: #84CAE8}
    .listitem {color: red}
  </style>
</head>
<body>
  <h1>About Me</h1>
  <ul>
    <li>Nickname: <span id="nickname"></span>
    <li>Favorites:  <span id="favorites"></span>
    <li>Hometown: <span id="hometown"></span>
  </ul>
  <script>
    document.body.style.fontFamily = 'Arial, sans-serif';

    //textContent => IE9+ assumed 
    document.getElementById('nickname').textContent = 'Hq';   
    document.getElementById('favorites').textContent = 'Hiking, cycling';
    document.getElementById('hometown').textContent = 'World Village';
    
    var liItems = document.getElementsByTagName('li'),
        numItems,
        i = 0;
    numItems = liItems.length;
    for (i; i < numItems; i += 1) { 
        liItems[i].className = 'listitem';
    }

    imgElem = document.createElement('img');
    imgElem.src = 'https://farm9.staticflickr.com/8154/7290335394_d182284382_n.jpg';
    document.body.appendChild(imgElem);

  </script>
</body>
</html>


// EXERCISE: The Book List

// Keep track of which books you read and which books you want to read!

// Create a webpage with an h1 of "My Book List".
// Add a script tag to the bottom of the page, where all your JS will go.
// Copy the array of books from the previous exercise.
// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8"/>
  <title>My book list</title>
  <style type="text/css">
    .booklist {line-height: 1.5em}
    .booklist img {
      width: 10%;
      height: auto;
      margin-right: 2%;
      vertical-align: middle;
    }
    .notread {background-color: rgba(255,0,0,.4)}
  </style>
</head>
<body>
  <h1>My book list</h1>
  
  <script>
    var books = [
        {
         title: 'JavaScript: The Good Parts',
         author: 'Douglas Crockford',
         cover: 'http://ecx.images-amazon.com/images/I/71M32wxOOmL.jpg',
         alreadyRead: true
        },
        {
         title: 'Speaking JavaScript',
         author: 'Axel Rauschmayer',
         cover: 'http://ecx.images-amazon.com/images/I/51H3g6Bts8L._SX258_BO1,204,203,200_.jpg',
         alreadyRead: false
        }
      ],
      docFrag = document.createDocumentFragment(),   //performance not a big deal here, but just in case
      itemElem = document.createElement('li'),       //create once, clone many times
      ulElem = document.createElement('ul'),
      newItem,
      numBooks,
      i = 0;

    //'Blueprint' structure for every book item
    itemElem.appendChild(document.createElement('img'));
    itemElem.appendChild(document.createTextNode(''));

    ulElem.className = 'booklist';
    numBooks = books.length;
    for (i; i < numBooks; i += 1) {
        newItem = itemElem.cloneNode(true);
        newItem.firstChild.src = books[i].cover;
        newItem.lastChild.nodeValue = books[i].title + ' by ' + books[i].author;    //let's assume support for IE8 and below required
        if (!books[i].alreadyRead) {
            newItem.className = 'notread';
        }
        docFrag.appendChild(newItem);
    }
    ulElem.appendChild(docFrag);
    document.body.appendChild(ulElem);

  </script>
</body>
</html>