# EJS Challenge - Blog Website Upgrade

## What's inside?

It's a blog website, you can post and read articles, very minimalistic and it's got a header up here with a nav bar and my brand and then at the bottom it's got a sticky footer and I can put in my footer text.

There are three pages: the home page, the about us page and also a contact us page. And all of this is going to be generated using EJS partials.

When you head over to the home page, this is going to have all of my blog posts on here listed in chronological order but the actual blog content will be truncated to only 100 characters.
When you click on read more, it will take you to an individual page of each of your blog posts and you can read them independently on a single page.

Now database connected.

## Techniques

- Javascript
- node.js
- express.js
- ejs
- templating
- partials 
- mongoDB
- mongoose

## What I have done?

- EJS template
- Pass data from webpage to server
- Add pre-made CSS styleshhets to my websites
- Node module export: Passing data and function between files
- Connect to database to mongoose, and using mongoose
- Save composed posts with MongoDB
- Get home page to render the posts
- Render the correct blog post based on post_id

## How to start?

prerequisite: MongoDB installed.

1. create blogDB in MongoDB.
2. run `npm install`
3. run `nodemon app.js`