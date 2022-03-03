import { PaginationProps } from "../../interfaces/PaginationProps"

export const Pagination = ({ nextPage, prevPage }: PaginationProps) => {
	return (
		<section className="my-5">
			<div className="container d-flex justify-content-between">
				<a href="#header" type="button" className="btn btn-primary" onClick={ prevPage }>Prev</a>
				<a href="#header" type="button" className="btn btn-primary" onClick={ nextPage }>Next</a>
			</div>
		</section>
	)
}