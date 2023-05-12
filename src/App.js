import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import SearchPage from './Pages/SearchPage/SearchPage'

function App() {
	return (
		<div className='app'>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/search' element={<SearchPage />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
