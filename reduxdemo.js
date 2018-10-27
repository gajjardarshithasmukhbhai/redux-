import React from 'react'
import ReactDOM from 'react-dom'
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css'
import {createStore} from 'redux';
class Reduxu extends React.Component{
render()
{
	//##step-2:://reducer:state n action
	const reducer=function(state,action){
		if(action.type==="ATTACK")
		{
			return action.payload
		}
		if(action.type==="greenATTACK")
		{
			return action.payload
		}
		return state;
	}
	//##step-1:://store :reducer in state
	const store=createStore(reducer,"peace")

	//##step-4:://subscribe
	store.subscribe(()=>{
		console.log("store is now",store.getState());
	})
	//##step-3:://Dispatch action
	store.dispatch({type:"ATTACK",payload:"Iron man"})
	store.dispatch({type:"greenATTACK",payload:"Hulk"})
	return(
			<div>
				<h1 class="text text-center lead text-capitalize"><b><br/>redux i am gajjar</b></h1>
				
			</div>
	);
}
}
export default Reduxu;