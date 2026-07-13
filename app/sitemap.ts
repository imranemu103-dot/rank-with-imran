import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rankwithimran.com",
      lastModified: new Date(),
    },
  ];
}