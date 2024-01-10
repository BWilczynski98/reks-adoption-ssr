import { EmptyImage } from "@/components";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { getAnimalBySlug } from "@/lib/fetch-data";
import { formatAge, formatAnimalSize, formatCapitalizeFirstLetter, formatGender } from "@/lib/format";
import { CameraOff, Check, X } from "lucide-react";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

type AnimalProfilePropsType = {
  animal: Animal;
};

function SkeletonAnimalProfile() {
  return (
    <div className="py-10">
      <Skeleton className="w-[400px] h-[400px] rounded-lg" />
    </div>
  );
}

function AnimalProfile({ animal }: AnimalProfilePropsType) {
  return (
    <Card className="mb-10">
      <CardContent className="space-y-10 xl:flex xl:space-x-10 xl:space-y-0 py-10">
        <div className="basis-1/4">
          {animal.image ? (
            <Image
              src={animal.image}
              width={350}
              height={300}
              alt={`Zdjęcie profilowe zwierzęcia ${animal.name}`}
              className="rounded-lg"
            />
          ) : (
            <div className="bg-slate-300/50 h-[300px] w-[350px] flex items-center justify-center rounded-lg">
              <CameraOff className="w-8 h-8 text-slate-500" />
            </div>
          )}
        </div>
        <div className="basis-3/4 space-y-6">
          <div className="mb-10">
            <h1 className="text-4xl tracking-wide font-semibold">{animal.name}</h1>
            <p className="text-slate-500 tracking-wide">{animal.breed}</p>
          </div>
          <div className="space-y-10 md:flex md:space-x-10 md:space-y-0 justify-between">
            <div className="basis-full">
              <h3 className="text-xl font-semibold text-slate-800">Informacje podstawowe</h3>
              <Separator />
              <div className="mt-4 space-y-2">
                <div>
                  <p className="font-medium">Płeć</p>
                  <p>{formatGender(animal.gender, animal.animal_type)}</p>
                </div>
                <div>
                  <p className="font-medium">Typ</p>
                  <p>{formatCapitalizeFirstLetter(animal.animal_type)}</p>
                </div>
                <div>
                  <p className="font-medium">Wiek</p>
                  <p>{formatAge(animal.birth_date)}</p>
                </div>
                {!!animal.size ? (
                  <div>
                    <p className="font-medium">Wielkość</p>
                    <p>{formatAnimalSize(animal.size)}</p>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="basis-full">
              <h3 className="text-xl font-semibold text-slate-800">Informacje zdrowotne</h3>
              <Separator />
              <div className="mt-4 space-y-2">
                <div>
                  <p className="font-medium">Chip</p>
                  <p>{animal.chip ? <Check className="text-green-500" /> : <X className="text-red-500" />}</p>
                </div>
                <div>
                  <p className="font-medium">Szczepienie</p>
                  <p>{animal.vaccinated ? <Check className="text-green-500" /> : <X className="text-red-500" />}</p>
                </div>
                <div>
                  <p className="font-medium">Odrobaczenie</p>
                  <p>{animal.dewormed ? <Check className="text-green-500" /> : <X className="text-red-500" />}</p>
                </div>
                <div>
                  <p className="font-medium">Kastracja/sterylizacja</p>
                  <p>{animal.neutered ? <Check className="text-green-500" /> : <X className="text-red-500" />}</p>
                </div>
                <div>
                  <p className="font-medium">Ogólny stan zdrowia</p>
                  <p>{animal.description_of_health}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-full">
            <h3 className="text-xl font-semibold text-slate-800">Usposobnienie</h3>
            <Separator />
            <div className="mt-4 space-y-2">
              <div>
                <p className="font-medium">Charakter</p>
                <p>{animal.character}</p>
              </div>
              <div>
                <p className="font-medium">Dla kogo</p>
                <p>{animal.for_who}</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-800">Podsumowanie</h3>
            <Separator />
            <p className="mt-4 text-justify">{animal.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-800">Kontakt</h3>
            <Separator />
            <div className="mt-4">
              <p>
                Jeśli jesteś zainteresowany adopcją prosimy o kontakt pod numer telefonu:{" "}
                <a className="text-primary" href="tel:+48666386567">
                  666 386 567
                </a>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default async function Page({ params }: Props) {
  const data: Animal = await getAnimalBySlug(params.slug);

  return (
    <section className="px-2 md:px-0 md:container">
      <AnimalProfile animal={data} />
    </section>
  );
}
