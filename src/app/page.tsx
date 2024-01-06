import { CarouselWithNewAnimalProfiles } from "@/app/components/carousel-with-new-profiles/carousel-with-new-profiles";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Landmark, MapPin, PawPrint, PhoneCall } from "lucide-react";
import Image from "next/image";
import heroPic from "../app/hero.png";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://reks-manager-xkpx3.ondigitalocean.app/api/public/animals/", {
    next: { revalidate: 100 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

function Hero() {
  return (
    <section className="relative h-[80dvh]">
      <div className="container h-full flex justify-between items-end">
        <div className="space-y-8 h-full flex flex-col justify-center">
          <div className="text-slate-800/85 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-widest">Twoje serce, ich dom.</h1>
            <h2 className="text-2xl md:text-3xl font-medium tracking-wider">
              Znajdz swojego <span className="text-primary">pupila</span> już dziś!
            </h2>
          </div>
          <div>
            <Button asChild>
              <Link href="/adoptuj">
                <div className="flex space-x-2 items-center">
                  <span> Znajdz pupila</span>
                  <PawPrint />
                </div>
              </Link>
            </Button>
          </div>
        </div>

        <div className="hidden lg:block">
          <Image src={heroPic} width={650} height={650} alt="Grafika przedstawiająca młodego owczarka niemieckiego" />
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const FAQ_CONTENT = [
    {
      question: "Jak mogę adoptować zwierzę ze schroniska?",
      answer:
        "Aby adoptować zwierzę ze schroniska, należy najpierw wypełnić formularz adopcyjny i przejść przez proces adopcyjny. Prosimy o wizytę w schronisku, aby poznać zwierzę i omówić wszelkie szczegóły z naszym zespołem.",
    },
    {
      question: "Czy zwierzęta w schronisku są szczepione i odrobaczone?",
      answer:
        "Tak, wszystkie zwierzęta w naszym schronisku są szczepione i odrobaczone zgodnie z naszym harmonogramem weterynaryjnym. Zapewniamy, że zwierzęta są w jak najlepszym stanie zdrowia przed adopcją.",
    },
    {
      question: "Czy schronisko przyjmuje darowizny?",
      answer:
        "Tak, schronisko z przyjemnością przyjmuje darowizny. Wsparcie finansowe, artykuły dla zwierząt i inne formy pomocy są zawsze mile widziane. Możesz dowiedzieć się więcej o sposobach wsparcia na naszej stronie internetowej.",
    },
    {
      question: "Czy schronisko organizuje wydarzenia adopcyjne?",
      answer:
        "Tak, regularnie organizujemy wydarzenia adopcyjne, aby pomóc zwierzętom znaleźć nowy dom. Informacje o planowanych wydarzeniach są publikowane na naszej stronie internetowej i mediach społecznościowych.",
    },
    {
      question: "Jak mogę zgłosić znalezienie lub zgubienie zwierzęcia?",
      answer:
        "Jeśli znalazłeś zgubione zwierzę lub zgubiłeś swojego pupila, prosimy o kontakt z naszym schroniskiem lub sprawdzenie naszej strony internetowej, gdzie zamieszczamy informacje o zwierzętach znalezionych lub zaginionych.",
    },
    {
      question: "Czy schronisko oferuje usługi weterynaryjne dla zwierząt?",
      answer:
        "Nasze schronisko oferuje podstawowe usługi weterynaryjne dla zwierząt przebywających w naszej opiece. Jednak zalecamy skonsultowanie się z lokalnym weterynarzem w sprawach specjalistycznych lub pilnych potrzebach zdrowotnych.",
    },
  ];

  return (
    <section className="py-10" id="faq">
      <div className="container">
        <h3 className="text-2xl md:text-3xl font-medium tracking-wider text-slate-800/85">FAQ</h3>
        <Accordion type="single" collapsible>
          {FAQ_CONTENT.map(({ question, answer }, i) => {
            return (
              <AccordionItem value={question} key={i}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="bg-secondary py-10" id="kontakt">
      <div className="container">
        <h3 className="text-2xl md:text-3xl font-medium tracking-wider text-slate-800/85">Kontakt</h3>
        <div className="py-4 space-y-2">
          <div className="flex items-baseline space-x-2">
            <PhoneCall className="text-primary w-4 h-4" />
            <p>Telefon: 666 386 567</p>
          </div>
          <div className="flex items-baseline space-x-2">
            <MapPin className="text-primary w-4 h-4" />
            <p>Adres: Kotarbińskiego 2D/2, 82-200 Malbork</p>
          </div>
          <div className="flex items-baseline space-x-2">
            <Landmark className="text-primary w-4 h-4" />
            <p>Nr konta bankowego: 50 1440 1026 0000 0000 0452 8344</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function Home() {
  const data = await getData();
  const lastAdded = data.slice(0, 10);
  return (
    <main>
      <Hero />
      <CarouselWithNewAnimalProfiles animals={lastAdded} />
      <FAQ />
      <Contact />
    </main>
  );
}
