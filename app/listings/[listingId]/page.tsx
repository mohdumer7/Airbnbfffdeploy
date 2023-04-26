import getListingById from "@/app/actions/getListingById";
import React from "react";

interface IParams {
  listingId?: string;
}

const Listingpage = async ({ params }: { params: Iparams }) => {
  const listing: any = await getListingById({
    params,
  });
  return <div>{listing.title} </div>;
};

export default Listingpage;
