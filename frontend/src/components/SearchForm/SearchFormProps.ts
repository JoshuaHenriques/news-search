import { Query } from "../../interfaces/QueryType";

export interface SearchFormProps {
	onSearch: (query: Query) => void;
}