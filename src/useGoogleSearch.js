import { useState, useEffect } from 'react'
import apiKey from './keys'

const contextKey = '27df6a834fe844356'

const useGoogleSearch = (term) => {
	const [data, setData] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			fetch(
				`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${contextKey}&q=${term}`
			)
				.then((response) => response.json())
				.then((result) => setData(result))
		}

		fetchData()
	}, [term])

	return { data }
}

export default useGoogleSearch
