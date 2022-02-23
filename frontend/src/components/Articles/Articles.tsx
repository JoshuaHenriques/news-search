import { Article } from "../Article/Article"

export const Articles = ( { articles }: { articles: any }) => {
	return (
		<section className="">
			<div className="container">
				<div className="">
				{ articles.map((article: any) => (<Article article={ article }/>)) }
				</div>
			</div>
		</section>
	)
}