export interface  PlacesResponse {
	type:        string;
	query:       string[];
	features:    Feature[];
	attribution: string;
}

export interface Feature {
	id:                   string;
	type:                 string;
	place_type:           string[];
	relevance:            number;
	properties:           Properties;
	text_es:              string;
	language_es?:         Language;
	place_name_es:        string;
	text:                 string;
	language?:            Language;
	place_name:           string;
	matching_text?:       string;
	matching_place_name?: string;
	center:               number[];
	geometry:             Geometry;
	context:              Context[];
}

export interface Context {
	id:           string;
	text_es:      string;
	text:         string;
	wikidata?:    string;
	language_es?: Language;
	language?:    Language;
	short_code?:  Language;
}

export enum Language {
	Es = "es",
}

export interface Geometry {
	coordinates: number[];
	type:        string;
}

export interface Properties {
	foursquare?: string;
	address?:    string;
	wikidata?:   string;
	landmark?:   boolean;
	category?:   string;
	accuracy?:   string;
}
