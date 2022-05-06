# Challenge 3 (EJS) - Blog Website

## What's inside?

It's a blog website, you can post and read articles, very minimalistic and it's got a header up here with a nav bar and my brand and then at the bottom it's got a sticky footer and I can put in my footer text.

There are three pages: the home page, the about us page and also a contact us page. And all of this is going to be generated using EJS partials.

Now when you head over to the home page, this is going to have all of my blog posts on here listed in chronological order but the actual blog content will be truncated to only 100 characters.
Now when you click on read more, it will take you to an individual page of each of your blog posts and you can read them independently on a single page.

## Techniques

- Javascript
- node.js
- express.js
- ejs
- templating
- partials 

## What I have done?

- app.js
- views
-- about.ejs
-- compose.ejs
-- contact.ejs
-- home.ejs
-- posts.ejs
-- partials
--- footer.ejs
--- header.ejs

## How to start?

1. run `npm install`
2. run `nodemon app.js`