import { View } from "react-native";
import PropertyListingCard from "./common/PropertyListingCard";
import { PropertyListing } from "../interfaces";

const PropertyListingProp = ({ listings }: PropertyListing) => {
  return (
    <View style={{ flex: 1, rowGap: 10 }}>
      {listings?.map((listing, key) => (
        <PropertyListingCard {...listing} key={key} />
      ))}
    </View>
  );
};

export default PropertyListingProp;
