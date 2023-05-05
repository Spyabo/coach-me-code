export type user = {
    _id: ObjectId;
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
    name: string;
    email?: string;
    phone?: string;
    years_of_experience: number;
    programming_languages: [];
    listing_ids: [];
    order_ids: [];
    tokens: number;
  };