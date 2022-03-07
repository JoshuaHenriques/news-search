import { Article } from "../Article/Article"
import { ArticleType } from "../../interfaces/ArticleType";
import { ArticlesProps } from "./ArticlesProps";
import "./Articles.css"

export const Articles = ( { articles }: ArticlesProps) => {
	return (
		<section>
			<div className="container d-flex justify-content-center">
				<div className="articles">
				{ articles.map((article: ArticleType) => (<Article key={article.content} article={ article }/>)) }
				</div>
			</div>
		</section>
	)
}