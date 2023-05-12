import React, { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps'
import { Avatar } from '@mui/material'
import Search from '../../Components/Search/Search'

const Home = () => {
	const [input, setInput] = useState('')
	return (
		<div className='home'>
			<div className='home_header'>
				<div className='home_headerLeft'>
					<Link to={'/'}>About</Link>
					<Link to={'/'}>Store</Link>
				</div>

				<div className='home_headerRight'>
					<Link to={'/gamil'}>Gmail</Link>
					<Link to={'/images'}>Images</Link>
					<AppsIcon />
					<Avatar />
				</div>
			</div>

			<div className='home_body'>
				<img src='/img/logo.png' alt='' />
				<div className='home_inputContainer'>
					<Search input={input} setInput={setInput} />
				</div>
			</div>
		</div>
	)
}

export default Home
