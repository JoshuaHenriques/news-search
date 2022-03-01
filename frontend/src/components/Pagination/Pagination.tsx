import { PaginationProps } from "../../interfaces/PaginationProps"

export const Pagination = ({ nextPage, prevPage }: PaginationProps) => {
	return (
		<section className="my-5">
			<div className="container d-flex justify-content-between">
				<button className="btn btn-primary" onClick={ prevPage }>Prev</button>
				<button className="btn btn-primary" onClick={ nextPage }>Next</button>
			</div>
		</section>
	)
}