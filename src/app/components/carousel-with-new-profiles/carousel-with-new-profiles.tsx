"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { ChevronRight, ChevronsRight } from "lucide-react";
import Link from "next/link";

type Props = {
  animals: Animal[];
};

export function CarouselWithNewAnimalProfiles({ animals }: Props) {
  return (
    <section className="w-screen bg-secondary py-10">
      <div className="container space-y-4">
        <div className="flex-col md:flex-row flex items-baseline justify-between">
          <h3 className="text-2xl md:text-3xl font-medium tracking-wider text-slate-800/85">Nasi podopieczni</h3>
          <Link href="/adoptuj" className="pointer">
            <p className="text-sm md:text-base text-slate-500 flex items-center space-x-1">
              <span>Zobacz wszystkie</span> <ChevronsRight className="w-4 h-4 md:w-6 md:h-6" />
            </p>
          </Link>
        </div>

        <Carousel>
          <CarouselContent className="-ml-1">
            {animals.map((item, index) => (
              <CarouselItem key={index} className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="flex aspect-[3/4] items-center justify-center p-6 relative ">
                      <Image src={item.image} fill alt={`Zdjęcie profilowe zwierzęcia ${item.name}`} />
                      <div className="absolute bottom-0 bg-gradient-to-t from-slate-900 to-slate-900/[1%] w-full px-2 py-4 flex items-end justify-between h-1/3">
                        <div>
                          <h2 className="text-xl font-semibold text-slate-50">{item.name}</h2>
                        </div>
                        <div>
                          <Button size={"icon"} asChild>
                            <Link href={`zwierze/${item.slug}`}>
                              <ChevronRight color="#f3f3f3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
