export type listing = {
  clerk_id: string;
  mentor_name: string;
  listing_title: string;
  listing_image?: string;
  listing_description: string;
  programming_languages: string[];
  token_rate: number;
};

export type getListingsResponse = {
  _id: string;
  clerk_id: string;
  mentor_name: string;
  listing_title: string;
  listing_image?: string;
  listing_description: string;
  listing_rating: number;
  programming_languages: string[];
  token_rate: number;
};
