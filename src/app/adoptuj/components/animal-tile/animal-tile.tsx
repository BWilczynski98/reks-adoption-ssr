import Image from "next/image";
import { AspectRatio } from "../../../../components/ui/aspect-ratio";
import dayjs from "dayjs";
import { useMemo } from "react";
import { formatGender } from "@/lib/format";
import { Button } from "../../../../components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type Props = {
  data: Animal;
};

export function AnimalTile({ data }: Props) {
  const age = useMemo(() => {
    return dayjs(data.birth_date).fromNow(true);
  }, [data.birth_date]);

  return (
    <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
      <Image src={data.image} fill alt={`Zdjęcie profilowe zwierzęcia ${data.name}`} />
      <div className="absolute bottom-0 bg-gradient-to-t from-slate-900 to-slate-900/[1%] w-full px-2 py-4 flex items-end justify-between h-1/3">
        <div>
          <h2 className="text-xl font-semibold text-slate-50">{data.name}</h2>
          <h3 className="text-lg text-slate-200">
            {formatGender(data.gender, data.animal_type)} | {age}
          </h3>
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
}
