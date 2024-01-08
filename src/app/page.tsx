import { Button } from "@/components/ui/button";
import { Mail, MapPin, PawPrint, PhoneCall } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import heroPic from "./hero.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getAnimals } from "@/lib/fetch-data";
import { CarouselWithNewAnimalProfiles, Donation } from "@/components";

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
      question: "Jak mogę adoptować zwierzę?",
      answer:
        "Aby adoptować zwierzę, należy przejść przez proces adopcyjny. Prosimy o wizytę w stowarzyszeniu, aby poznać zwierzę i omówić wszelkie szczegóły z naszym zespołem.",
    },
    {
      question: "Czy zwierzęta są szczepione i odrobaczone?",
      answer:
        "Tak, wszystkie zwierzęta w naszym stowarzyszeniu są szczepione i odrobaczone zgodnie z naszym harmonogramem weterynaryjnym. Zapewniamy, że zwierzęta są w jak najlepszym stanie zdrowia przed adopcją.",
    },
    {
      question: "Czy stowarzyszenie przyjmuje darowizny?",
      answer:
        "Tak, stowarzyszenie z przyjemnością przyjmuje darowizny. Wsparcie finansowe, artykuły dla zwierząt i inne formy pomocy są zawsze mile widziane.",
    },
    {
      question: "Czy stowarzyszenie organizuje wydarzenia adopcyjne?",
      answer:
        "Tak, regularnie organizujemy wydarzenia adopcyjne, aby pomóc zwierzętom znaleźć nowy dom. Informacje o planowanych wydarzeniach są publikowane na naszych mediach społecznościowych.",
    },
    {
      question: "Jak mogę zgłosić znalezienie lub zgubienie zwierzęcia?",
      answer:
        "Jeśli znalazłeś zgubione zwierzę lub zgubiłeś swojego pupila, prosimy o kontakt z naszym stowarzyszeniem.",
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
    <section className="py-10" id="kontakt">
      <div className="container">
        <h3 className="text-2xl md:text-3xl font-medium tracking-wider text-slate-800/85">Kontakt</h3>
        <div className="py-4 space-y-2">
          <div className="flex items-center space-x-2">
            <PhoneCall className="text-primary w-4 h-4" />
            <a className="text-primary" href="tel:+48666386567">
              666 386 567
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="text-primary w-4 h-4" />
            <a href="mailto:reks-malbork@wp.pl" className="text-primary">
              reks-malbork@wp.pl
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="text-primary w-4 h-4" />
            <p>Kotarbińskiego 2D/2, 82-200 Malbork</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function Home() {
  const data = await getAnimals();
  const lastAdded = data.slice(0, 10);
  return (
    <main>
      <Hero />
      <CarouselWithNewAnimalProfiles animals={lastAdded} />
      <FAQ />
      <Donation />
      <Contact />
    </main>
  );
}
