async function getAnimals() {
  const res = await fetch("https://reks-manager-xkpx3.ondigitalocean.app/api/public/animals/", {
    next: { revalidate: 600 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getAnimalBySlug(slug: string) {
  console.log(`getAnimalBySlug: ${slug}}`);
  const res = await fetch(`https://reks-manager-xkpx3.ondigitalocean.app/api/public/animal/${slug}/`, {
    next: { revalidate: 600 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export { getAnimals, getAnimalBySlug };
