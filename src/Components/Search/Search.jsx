import React, { useEffect, useState } from 'react'
import './Search.css'
import MicIcon from '@mui/icons-material/Mic'
import SearchIcon from '@mui/icons-material/Search'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'
import { useStateValue } from '../../StateProvider'
import { actionTypes } from '../../reducer'
import { SettingsInputAntenna } from '@mui/icons-material'

const Search = ({ hidebuttons, input, setInput }) => {
	const [{ term }, dispatch] = useStateValue()
	const navigate = useNavigate()

	const search = (e) => {
		e.preventDefault()
		dispatch({
			type: actionTypes.SET_SEARCH_TERM,
			term: input,
		})
		navigate('/search')
	}

	return (
		<div className='search'>
			<form>
				<div className='search_input'>
					<SearchIcon className='search_inputIcon' />
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						type='text'
					/>
					<MicIcon />
				</div>

				{!hidebuttons ? (
					<div className='home_buttons'>
						<Button type='submit' onClick={search} variant='outlined'>
							Google Search
						</Button>
						<Button variant='outlined'>I'm Feeling Lucky</Button>
					</div>
				) : (
					<div className='home_buttonsHidden'>
						<Button type='submit' onClick={search} variant='outlined'>
							Google Search
						</Button>
						<Button variant='outlined'>I'm Feeling Lucky</Button>
					</div>
				)}
			</form>
		</div>
	)
}

export default Search
