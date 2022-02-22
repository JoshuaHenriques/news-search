import { useState } from 'react' 

export const SearchForm = ({ onSearch }: { onSearch: Function }) => {
	const [keywords, setKeywords] = useState('')
	const [fromDate, setFromDate] = useState('')
	const [toDate, setToDate] = useState('')
	const [sort, setSort] = useState('')

	const onSubmit = (e: any) => {
		e.preventDefault()

		if (!keywords || !fromDate || !toDate || !sort) {
			alert('Please fill out form')
			return
		}
		
		onSearch({ keywords, fromDate, toDate, sort, page: 1 })
		
		setKeywords('')
		setFromDate('')
		setToDate('')
		setSort('')
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<label>Search:</label>
				<input type="text" placeholder='keywords' value={keywords} onChange={(e) => setKeywords(e.target.value)}></input>
				<label>From:</label>
				<input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)}></input>	
				<label>To:</label>
				<input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)}></input>
				<label>Sort By:</label>
				<label><input type="radio" value="publishedAt" name="sort" onChange={(e) => setSort(e.target.value)} />PublishedAt </label>
				<label><input type="radio" value="relevancy" name="sort" onChange={(e) => setSort(e.target.value)} />Relevancy </label>
				<label><input type="radio" value="popularity" name="sort" onChange={(e) => setSort(e.target.value)} />Popularity </label>
				<input type="submit" value="Submit"></input>
			</form>
		</div>
	)
}