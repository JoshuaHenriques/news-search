import { Query } from "./QueryType";

export interface SearchFormProps {
	onSearch: (query: Query) => void;
}