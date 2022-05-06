import React from "react";

/* Class Components - 1
There's also another way that you can in fact create React components. 
Instead of splitting individual components into functions, you can also 
create a class. And the only difference is the keyword, instead of 
function becomes class. Classes are not called, so they don't have 
these parentheses. And this class must extend something that comes 
from the React module something called component. And this turns your 
app class into a React component class. And in order to render what 
you want to see inside this component, you have to add your code 
inside a render method like so (return() -> render() {return (...)}).
*/

/* Class Components - 2
Now in the past, the main reason why people converted their functional 
components into class components was because it was required in order 
to have state. https://reactjs.org/docs/state-and-lifecycle.html in the
documentation, you'll see that in order to use state, it used to be 
that you had to convert your functions into a class just like what 
we did just now. */

/* Class Components - 3 -"this."
Now this works exactly the same as what we would have done using hooks 
but you can see that involves a lot more boilerplate code and it's a 
little bit harder to reason about especially when you've got "this." 
all over the place. It also requires binding and it gets pretty 
complicated when you want to reuse some of your state functionality 
across different components.
*/

/* Class Components - 4 - Hook
So back in 2018, the React team set about trying to solve this problem 
and many others. And they came up with the idea of hooks. 
https://reactjs.org/docs/hooks-intro.html Now what the React team 
recommends is that if you're writing new code that you should start 
using hooks instead of classes because this is a much easier way of 
managing state. It just makes the code much clearer and much easier 
to reason about. Now the thing to remember is that you can only use 
hooks with functional components. You can't use it inside a class 
component. But they do say that if you already have classes written 
for a React app, then you can use it alongside. 
https://reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both
*/

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.increase = this.increase.bind(this);
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}

export default ClassComponent;
