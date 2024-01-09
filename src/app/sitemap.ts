import { getAnimals } from "@/lib/fetch-data";
import { MetadataRoute } from "next";

export const revalidate = 120;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data: Animal[] = await getAnimals();

  const animals = data.map(({ created_at, slug }) => ({
    url: `https://www.reks-malbork.pl/zwierze/${slug}`,
    lastModified: created_at,
    priority: 0.7,
  }));

  return [
    {
      url: "https://www.reks-malbork.pl",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.reks-malbork.pl/adoptuj",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...animals,
  ];
}
