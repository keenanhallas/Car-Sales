import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { carReducer } from "./reducers/index";

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(carReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);

/*
1. Write an empty reducer

2. Create a redux store
	a. Import {Provider} from react-redux, {createStore} from redux (top level)
	b. Import your reducer(s) (top level)
	c. const store = createStore(reducer) (top level)
    d. Wrap app in provider with a store={store} attribute (matches up with store in step c)

3. Set up actions
    a. In index, export const for each action creator
	b. One to one mapping with reducer switch cases
	c. Define constants, export to reducer
	d. Import the action creators into the component(s)
	e. export default connect(mapStateToProps, mapDispatchToProps)(component)

4. Connect components to the Redux  store
	a. Import {connect} from react-redux
	b. Create mapStateToProps (takes in state, returns an object (passed as props))
	c. const mapDispatchToProps = {imported action creators here}
	// export default connect(mapStateToProps, mapDispatchToProps)(Title)
	// connect is a function that takes two arguments:
		1- mapStateToProps, a function that returns an object. This maps our redux state to the props of the component we are connecting
		2. mapDispatchToProps, an object of action creators - this wraps each action creator inside dispatch, and then adds a corresponding function to the props of the component we are connecting. (Calling that function dispatches the action to the reducer.)
	// connect(mapStateToProps, mapDispatchToProps) returns a HOC, which we then invoke on 	our component to enhance it with the ability to communicate with the store. That's why it looks 	like we're "calling connect twice" but we're actually just chaining the successive function calls 	together.

5. Hooking things up
	a. Set the initial state within the reducer params when it’s declared
	b. Call props.whatever instead of state.whatever (make sure component takes in props)
	c. Replace dispatches with props.actionCreator (inside an arrow function)
*/
