import { Query } from "../../types/Query"

export const Pagination = ({ query, nextPage, prevPage }: { query:Query, nextPage: any, prevPage: any }) => {
	return (
		<div>
			<button className="btn btn-primary" onClick={ prevPage }>Prev</button>
			<button className="btn btn-primary" onClick={ nextPage }>Next</button>
		</div>
	)
}