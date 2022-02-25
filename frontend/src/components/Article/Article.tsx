import { Articles } from "../Articles/Articles"

export const Article = ( { article }: { article: any }) => {
	return (
		<section className="">
			{/* <div>
				<h4>{ article.title }</h4>
				<p> { article.description }</p>
				<p> { article.content } </p>
				<p> { article.author } </p>
				<p> { article.publishedAt } </p>
				<p> { article.source.name } </p>
				<p> { article.url } </p>
			</div> */}

			<div className="card my-5" >
				<img src={ article.urlToImage } className="card-img-top" alt=""></img>
				<div className="card-body">
					<h5 className="card-title">{ article.title }</h5>
					<p className="card-text">{ article.content }</p>
					<a href={ article.url } className="btn btn-primary">Go to Article</a>
				</div>
			</div>
		</section>
	)
}