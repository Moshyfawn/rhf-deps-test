import { useForm, Controller } from 'react-hook-form'
import logo from './logo.svg'
import './App.css'

const onSubmit = (data) => {}

function App() {
	const { handleSubmit, control } = useForm()
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='App'>
			<Controller name='file' control={control} render={({ field }) => <input {...field} />} />
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</form>
	)
}

export default App
