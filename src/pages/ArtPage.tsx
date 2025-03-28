import React from "react";
import TopSection from "../components/TopSection";
import TextSection from "../components/TextSection";

interface Service {
  name: string;
  shortDescription: string;
  longDescription: string;
  mediaPath: string;
  mediaType: "image" | "video";
}

const ArtPage = ({ service }: { service: Service }) => {
  return <div>art</div>;
};

export default ArtPage;
