import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import response from '../../response'
import { useStateValue } from '../../StateProvider'
import useGoogleSearch from '../../useGoogleSearch'
import './SearchPage.css'
import Search from '../../Components/Search/Search'
import SearchIcon from '@mui/icons-material/Search'
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'
import BookOutlinedIcon from '@mui/icons-material/BookOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'

const SearchPage = () => {
	const [{ term }, dispatch] = useStateValue()
	const [input, setInput] = useState(term)
	const { data } = useGoogleSearch(term)

	// const data = response

	console.log(data)

	return (
		<div className='searchPage'>
			<div className='searchPage_header'>
				<Link to={'/'}>
					<img
						src='/img/logo.png'
						alt=''
						className='searchPage_headerLogo'
					/>
				</Link>

				<div className='searchPage_headerBody'>
					<Search hidebuttons input={input} setInput={setInput} />

					<div className='searchPage_options'>
						<div className='searchPage_optionLeft'>
							<div className='searchPage_option'>
								<SearchIcon />
								<Link to={'/all'}>All</Link>
							</div>

							<div className='searchPage_option'>
								<SmartDisplayOutlinedIcon />
								<Link to={'/videos'}>Videos</Link>
							</div>

							<div className='searchPage_option'>
								<ImageOutlinedIcon />
								<Link to={'/images'}>Images</Link>
							</div>

							<div className='searchPage_option'>
								<ArticleOutlinedIcon />
								<Link to={'/news'}>news</Link>
							</div>

							<div className='searchPage_option'>
								<BookOutlinedIcon />
								<Link to={'/books'}>Books</Link>
							</div>

							<div className='searchPage_option'>
								<MoreVertOutlinedIcon />
								<Link to={'/more'}>More</Link>
							</div>
						</div>

						<div className='searchPage_optionRight'>
							<Link to={'tools'}>Tools</Link>
						</div>
					</div>
				</div>
			</div>

			{term && (
				<div className='searchPage_results'>
					<p>
						About {data?.searchInformation.formattedTotalResults} results
						({data?.searchInformation.formattedSearchTime} seconds)
					</p>

					{data?.items.map((item, idx) => (
						<div key={idx} className='searchPage_result'>
							<a href={item.link}>
								{item?.pagemap?.cse_image?.length > 0 &&
									item?.pagemap?.cse_image[0]?.src && (
										<img
											className='searchPage_resultImg'
											src={item?.pagemap?.cse_image[0]?.src}
											alt=''
										/>
									)}

								{item.displayLink}
							</a>
							<a href={item.link}>
								<h2>{item.title}</h2>
							</a>
							<p className='searchPage_resultSnippet'>{item.snippet}</p>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default SearchPage
