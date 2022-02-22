import { Article } from "../Article/Article"

export const Articles = ( { articles }: { articles: any }) => {
	return (
		<div>
			{ articles.map((article: any) => (<Article article={ article }/>)) }
		</div>
	)
}