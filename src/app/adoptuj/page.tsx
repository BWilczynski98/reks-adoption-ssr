import { AnimalTile } from "@/app/adoptuj/components/animal-tile/animal-tile";

async function getData() {
  const res = await fetch("https://reks-manager-xkpx3.ondigitalocean.app/api/public/animals/", {
    next: { revalidate: 100 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function AvailableForAdoption() {
  const data: Animal[] = await getData();
  return (
    <section className="container space-y-10">
      <div>
        <h1 className="text-xl font-semibold tracking-wider">
          Znajdz swojego wymarzonego <span className="text-primary">pupila</span>
        </h1>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {data.map((animal, i) => {
          return <AnimalTile key={i} data={animal} />;
        })}
      </div>
    </section>
  );
}
