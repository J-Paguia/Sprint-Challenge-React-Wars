# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

One problem that it trys to solve is by the use of the virtual DOM. When a page is rendered using React, the state of the DOM tree structure/hierarchy is stored, and when there any updates to be made to the UI, it does a diff on the previous (old) DOM tree with the new one, and updates only the ones that have changed. In this way, lots of DOM operations/refreshes are reduced, improving performance considerably.


1. Describe component state.

State is like a data store to the ReactJS component. It is mostly used to update the component when user performed some action like clicking button, typing some text, pressing some key, etc.


1. Describe props.

Props is a keyword in React which stands for properties and is being used for passing data from one component to another. But the important part here is that data with props are being passed in a uni-directional flow.


1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

A "side effect" is anything that affects something outside the scope of the function being executed. These can be, say, a network request, which has your code communicating with a third party (and thus making the request, causing logs to be recorded, caches to be saved or updated, all sorts of effects that are outside the function.

