import { getListings } from "@lib/mongo/listings";
import { getListingsResponse } from "@lib/types/listings";
import ListingPreview from "../components/Listings/ListingPreview";

export default async function ListingsPage() {

  return (
    <div>
      { /* @ts-ignore */}
      <ListingPreview />
    </div>
  );
}
