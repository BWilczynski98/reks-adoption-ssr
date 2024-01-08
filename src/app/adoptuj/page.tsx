import { AnimalTile } from "@/components";
import { getAnimals } from "@/lib/fetch-data";

export default async function AvailableForAdoption() {
  const data: Animal[] = await getAnimals();
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
