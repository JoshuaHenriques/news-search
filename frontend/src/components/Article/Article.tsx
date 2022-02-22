import { Articles } from "../Articles/Articles"

export const Article = ( { article }: { article: any }) => {
	return (
		<div>
			<h4>{ article.title }</h4>
			<p> { article.description }</p>
			<p> { article.content } </p>
			<p> { article.author } </p>
			<p> { article.publishedAt } </p>
			<p> { article.source.name } </p>
			<p> { article.url } </p>
		</div>
	)
}