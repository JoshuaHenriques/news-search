import { Article } from "../Article/Article"
import "./Articles.css"

export const Articles = ( { articles }: { articles: any }) => {
	return (
		<section className="">
			<div className="container d-flex justify-content-center">
				<div className="articles">
				{ articles.map((article: any) => (<Article article={ article }/>)) }
				</div>
			</div>
		</section>
	)
}