import { ArticleType } from "../../interfaces/ArticleType";

export const Article = ( { article }: { article: ArticleType }) => {
	return (
		<section>
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