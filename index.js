import React from 'react'
import ReactDOM from 'react-dom'
import  'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import Reduxu from './reduxdemo.js';
class Redux extends React.Component{
render()
{
	return(
			<div><br/>
				<div class="redux">
					<h1 class="text-center">I am James Bond of React and Redux</h1>	
				</div>
				<Reduxu/>
			</div>
	);
}
}
ReactDOM.render(<Redux/>,document.getElementById("root"));