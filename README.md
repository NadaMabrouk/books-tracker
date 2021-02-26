# BooksTracker
**First Project in Udacity React Nanodegree Program**

This is a books tracker application that divides the list of books into three categories(shelfs): 
- Currently Reading 
- Want to Read
- Read
and the user can move the books between the shelfs based on each book's status.
The application also has a search page in which the user can search using different terms and the application displays the matching books.

----------------------------------------------------------------------------------------------------
The application connects to **BooksAPI** to fetch the books and display them to the user.
The BooksAPI supported functions are:
<pre>getAll()</pre>
- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.
<pre>updateShelf(book,shelf)</pre>
- book: <Object> containing at minimum an id attribute.
- shelf: <String> contains one of ["wantToRead", "currentlyReading", "read"].
- Returns a Promise which resolves to a JSON object containing the response data of the POST request.
<pre>search(query)</pre>
- query: <String>
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

------------------------------------------------------------------------------------------------------
# Learning Outcomes
- JS6 Fundamentals
- Class Components
- State Managment
- Props and PropTypes
- React Router 
- Customized CSS

-------------------------------------------------------------------------------------------------------
# Steps to run the application
1. Download the repository on your machine.
2. Navigate to the project on your CMD.
3. install dependencies
<pre> npm install </pre>
4. start the application
<pre> npm start </pre>
