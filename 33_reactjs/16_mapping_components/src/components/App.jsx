import React from "react";
import Card from "./Card";
import contacts from "../contacts";

/*So let's go ahead and get it to create a card and what the map function does is it loops through this
array of "contacts".map(createCard) and for every single item that exists in the array, it calls the createCard function 
and it passes over each of the objects inside the array.*/
// contact is a javascript object.
function createCard(contact) {
  return (
    <Card
	  id={contact.id}
	  /* "Warning: Card `key` is not a prop. Trying to access it will result in undefined being returned.So if you need it, 
	  you should create the same value as a different prop." And we can see this if we actually look inside the React dev tools.
	  If we look at our card, we can see that out of all of the props that we're getting we don't see that key prop. 
	  And the reason is because as I mentioned, that key property for each React component is a special property. And 
	  it's used to ensure the right order of items goes into the tree, it's used so that it can render each of these components 
	  efficiently when they're being created from a loop, but it is not something that we can tap into. If we actually wanted 
	  to show that id which comes from contacts, what we actually have to do is we have to create our own custom props. 
	  Say for example "id = contact.id". And even though it seems a bit repetitive because it seems like we've already got 
	  this key called prop that is contact.id, but we have to remember that this is not for us to use. So now if I go in here 
	  and I change that props to id then everything works fine and I don't get any warnings anymore.*/
      key={contact.id} //Waning: Each child in a list should have a unique "key" props.
	  /* React is able to create a virtual DOM that represents the current appearance of your website.
	  And for it to be able to efficiently render components for every single component that's being
	  rendered using a loop such as the map function, we will have to give those components a property 
	  that has to be called key. And this property has to be something that is unique amongst each of 
	  these card components that's being created using this loop. */
	  /* Now this key prop has to be spelt exactly like this and it's expected by React. And the value
	  can be a string or it can be a number, but it must be unique across all of the repeated components. */
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)} 
	  /* ↑ We have wrap it inside some curly braces so this gets interpreteds as javascript code. Because  we're inside a <div> element as a child
	  (tho it look like we're typing it out lie it's plain text this is of course we're inside a <div> element as  a child.
	  */
	  /*This map function as the input the thing that should go inside these parentheses, 
	  it expects an actual function. So in this case we're calling a function and then 
	  passing it a function.
	  */
	  /*
	  And this is kind of the fundamentals of what you might call functional programming, where instead
	  of passing values around your code, you're passing functions into functions even into functions. 
	  You can have many many levels of functions being passed around.
	  */

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
