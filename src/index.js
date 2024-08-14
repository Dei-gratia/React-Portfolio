import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>);

const themeToggler = document.querySelector('#theme__icon');
themeToggler.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme-variables')
	if(document.body.classList == '') {
		themeToggler.innerHTML = '<MdDarkMode />'
	}
	else {
		themeToggler.innerHTML = '<IoSunnyOutline />'
	}
})