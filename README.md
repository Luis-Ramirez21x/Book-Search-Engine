# Book Search-Engine
https://nameless-ridge-10810.herokuapp.com/

## Table of Contents

- [Summary](#summary)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [App Screenshots](#app-screenshots)
- [Author](#author)

### Summary
This is a MERN app using GRAPHQL and Apollo to manage requests. Book Search-Engine allows you to create an account with a standard email, username, and password which are safeguarded using bcrypt and JWTs. Without creating an account you can only search books. If you do create an account, you can save any book you search and then view which ones you saved on a different page. You may also remove those searched books from your saved books list.


### User Story
```
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase

```

### Acceptance Criteria
```
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  

```

### App Screenshots
![login-signup](https://user-images.githubusercontent.com/86748117/152877270-cf1f3413-f2ad-4682-8825-ec6ef32556cf.PNG)
![main page](https://user-images.githubusercontent.com/86748117/152877284-861f2c01-fc95-4f34-ad30-acc8631f5255.PNG)
![saved books](https://user-images.githubusercontent.com/86748117/152877293-3526f44a-1163-417e-b15c-9232ebd20b66.PNG)
![delete book option](https://user-images.githubusercontent.com/86748117/152877300-f3ae5f3e-d0a2-47d9-a28d-b9591ff9d737.PNG)



## Author

Visit my Github!
https://github.com/settings/profile
