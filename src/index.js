import _ from 'lodash';
import './styles/style.css'
import { square } from "./match.js";

function component() {
	let ele = document.createElement('div');

	ele.innerHTML = _.join(['hello', 'Test'], '');
	ele.classList.add('hello');

	return ele
}

document.body.appendChild(component());
