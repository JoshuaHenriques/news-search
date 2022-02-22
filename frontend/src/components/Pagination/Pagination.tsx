import { Query } from "../../types/Query"

export const Pagination = ({ query, nextPage, prevPage }: { query:Query, nextPage: any, prevPage: any }) => {
	return (
		<div>
			<button onClick={ prevPage }>Prev</button>
			<button onClick={ nextPage }>Next</button>
		</div>
	)
}