1. Where does React put all the elements I create in JSX when I call 'root.render()'?
  In the the div with id of root located in the body of index.html

2. What would show up in my console if I were to run this line of code:
  'console.log(<h1>Become a competent dev</h1>)'

  An object. Unlike creating an HTML element in vanilla DOM JS, what gets created from the JSX
  we have in our React code is a plain JS object that react will use to fill in the view.


3. What's wrong with this code?
'root.render(
  <h1>Become a competent dev</h1>
  <p>Hola</p>
)'

  You can only render one parent element at a time. That parent element can have as many children elements as you want.

4. What does it mean for something to be declarative instead of imperative?
  Imperative means we need to give clear instructions on how to acomplish a task.
  Declarative means we can write code to simple describe WHAT should show up on the page and allow the tool (React) to handle the details of HOW to put those things on the page.

5. What does it mean for something to be composable?
  We have small pieces that we can put together to make something larger or greater than the individual pieces themselves. 
