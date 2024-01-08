"use client";
import { formatGender } from "@/lib/format";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  data: Animal;
};

export const AnimalTile = ({ data }: Props) => {
  return (
    <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
      <Image
        src={data.image}
        fill
        alt={`Zdjęcie profilowe zwierzęcia ${data.name}`}
        priority={true}
        className="rounded-lg transition-opacity opacity-0 duration-[2s]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <div className="absolute bottom-0 bg-gradient-to-t from-slate-900 to-slate-900/[1%] w-full px-2 py-4 flex items-end justify-between h-1/3">
        <div>
          <h2 className="text-xl font-semibold text-slate-50">{data.name}</h2>
          <h3 className="text-lg text-slate-200">{formatGender(data.gender, data.animal_type)}</h3>
        </div>
        <div>
          <Button size={"icon"} asChild>
            <Link href={`zwierze/${data.slug}`}>
              <ChevronRight color="#f3f3f3" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
