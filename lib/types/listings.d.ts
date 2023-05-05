export type listing = {
  listing_title: string;
  mentor_rating: number;
  listing_image: string;
  listing_description: string;
  name: string;
  token_rate: number;
  programming_languages: string[];
};

export type getListingsResponse = {
  _id: string;
  listing_title: string;
  mentor_rating: number;
  listing_image: string;
  listing_description: string;
  name: string;
  token_rate: number;
  programming_languages: string[];
};

export type postListingType = {
  listing_title: string;
  listing_description: string;
  programming_languages: string[];
  token_rate: number;
};
