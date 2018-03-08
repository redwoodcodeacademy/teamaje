- Run `npm install` to download dependencies;
- Run `npm start` to kick off webpack-dev-server;
- Run `npm run build` to create a bundle.js file in the public directory

webpack-dev-server is considered a `hot-loader` and won't output a bundle.js by default but rather uses an in-memory construct that injects it straight into the DOM. So while we won't see the physical file in our filesystem we are not to worry because it is being injected for us.



Let's take a look at Webpack

Explain NPM package.json
Explain Babel
What is ES6 and why do we need a transpiler

Explain Webpack config
Explain entry and output
Explain loaders

----

Why does everything go into the src directory
What is the public directory
Show the index.html in the public directory and that it's the only real "static" source file

Show app.js
Explain import/export from ES6
What are the imports for a basic React app?
What is ReactDOM.render
This is our entry point

----


What is a React Component
This is the basis for all of React
React components at the very least are a piece of HTML
Dumb components vs smart components (state)
Show container.js and talk about how it works and receives props

Show how to change the title for Container
Show the hot loading from webpack-dev-server
Add another property to Container
Show how they are essentially custom attributes

----

Let's build another custom component
We will build a TodoList - basic CRUD



----

### TodoList starter


```
import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className="text-center">{this.props.title}</h1>
            </div>
        )
    }
}
  
export default TodoList;
```