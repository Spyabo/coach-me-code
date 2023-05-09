export type userType = {
  clerk_id: string;
  name: string;
  email?: string;
  phone?: string;
  years_of_experience: number;
  programming_languages: [];
  listing_ids: [];
  order_ids: [];
  tokens: number;
};

export type getUsersResponse = {
  _id: string;
  clerk_id: string;
  name: string;
  email?: string;
  phone?: string;
  years_of_experience: number;
  programming_languages: [];
  listing_ids: [];
  order_ids: [];
  tokens: number;
};

export type tokenRequest = {
  tokens: number;
};
