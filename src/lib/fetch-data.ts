async function getAnimals() {
  const res = await fetch("https://reks-manager-6tlcn.ondigitalocean.app/api/public/animals/", {
    next: { revalidate: 120 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getAnimalBySlug(slug: string) {
  const res = await fetch(`https://reks-manager-6tlcn.ondigitalocean.app/api/public/animal/${slug}/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export { getAnimals, getAnimalBySlug };
