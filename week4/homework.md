# Homework

## So why this homework?
To make a site work like a real website we need to add styling to it and some client functionality using js. In this homework we will finish our meal sharing website so meals can be created and reservations made at the meals. In the end we will deploy the site to the web, so other people can also use it!

> Please help us improve and share your feedback! If you find better tutorials or links, please share them by opening a Pull Request.

## Warmup

### Spam detector

Lets create a simple spam detector. 

Create a class called `Email` and a class called `SpamDetector`. 

- `Email` has two properties: `subject` and `body`.
- `SpamDetector` should have one method: `isSpam(email)`. This function should return a `boolean`, indicating if the email is spam or not. The method has a parameter called `email` that is an instance of the `Email` class.

Here are some rules for what defines an email as spam. 
1. Has more than 60% uppercase characters
2. Contain words like: 
  - Viagra
  - Offer
  - Free
  - Business Proposal
3. Subject only contains the string "Hello"
4. Now you add one rule that you think would make an email spam!

You could make it so these just one of these rules should be true for it to be marked as spam. Or you can make it so that fx rule 1 AND rule 3 should be true. That is up to you!

This is how the spam detection should work:

```js
const emailFromOldFriend = new Email('Hello old friend', 'Long time no see, when should we hang out again??');

const spamDetector = new SpamDetector();
console.log(spamDetector.isSpam(emailFromOldFriend)); // false
```

Now create some different emails and check if they are spam or not. How well does it perform?

## Lets build a real functioning site :)

To visualize what we will be building, take a look at: https://www.mealsharing.com/

Use the template (also called scaffold) found in the [homework folder](homework). To figure out how to install and run the project check out the [readme](homework/README.md)

In this project we will be doing all the routing and building of the html on the client side. The server side will be responsible for all data interaction through the api we created last week.

### 🏁 Getting Started <a name = "getting_started"></a>
The homework for week4 should be made in a standalone repo on your github profile, so you can show it friends/new employeers/headhunters etc. 

Here are the steps to do that:

1. Create a new repository on your github profile. 
2. Clone that repository down locally. 
3. Copy the code for the template from the this folder into the newly created repo. 
4. Now copy last weeks `server` folder into the new repo in the `src` folder. You will now have a `server` folder and a `client` folder in the `src` folder.
5. Uncomment the lines that is for week4!
6. Add, commit and push the changes to your github.
7. In the `hyf-homework/node/week4` just add a text file with the link to the newly created repo.
8. Thats it 🎉

### Adding frontend routes

| Route | Description |
| ---- | ----- |
| `/` | Add a page title and a sub title. Under that render all the meals found in the database. Please add more to this page like footer, menu, logo, etc. |
| `/meals/{id}` | Render the meal with the specific `id`. Add a form to create reservations for the meal |
| `/meals` | Render all the meals found in the database with a link to their respective pages (`meals/3`). Add a form to create a meal.  |

When it says `render the meal` What is rendered is up to you! You could render the `title`, `id`, `description` but you decide what makes sense and what looks good! You are in charge 💪

Rendering the html will all be done client side. That means using `innerHTML` fx `document.querySelector('body').innerHTML`. So if i wanted to render all meals here is how that should work:

1. Using `fetch` get the meals from `/api/meals`
2. With the meals array gotten from `/api/meals` create a string with the rendered html containing `ul` and `li`
3. Set the `innerHTML` of an element (fx the `body`) to the string with the rendered html

### /meals/{id}
The `/meals/{id}` route should have a form for making a reservation for the meal. The form should have `phonenumber`, `name` and `email`. The signup should work asynchronously on the frontend using the [`POST /api/reservations` api](../week3/homework#reservation) we created [here](../week3/homework#reservation)

This form should only be shown if the meal does have available reservations! 

That means that we in js need to:
- When the "book seat" button is clicked get the `phonenumber`, `name` and `email` from either the form or the individual inputs
- Now create a [post request using fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options) with the `phonenumber`, `name` and `email`. Posting the request [here](../week3/homework#meal)
- If the request is successful indicate to the user that the request went well. If it was unsuccessful show an error message. This we could do using `alert`

### Styling
Add some styling to the website so it is not so basic looking!

### Autocomplete for meals *optional*
Create an autocomplete for searching for a meal. The autocomplete should be added to the `home` route and the `meals` route. The autocomplete should use the query parameter `title` in the [meals api](../week3/homework#using-the-api) 

### Reviews *optional*
Create the possibility for a person to leave a review for a meal. 

### Deploy
Deploy your application [using Heroku](readme.md/#deploying-to-heroku). 
