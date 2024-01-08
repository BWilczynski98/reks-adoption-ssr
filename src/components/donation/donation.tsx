"use client";
import { Copy } from "lucide-react";
import { Button } from "../ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { useToast } from "../ui/use-toast";

const bankName = "Bank BGZ S.A. Oddział Operacyjny w Malborku";
const accountNumber = "96 2030 0045 1110 0000 0148 9170";
const BIC = "PPABPLPK";
const SWIFT = "PL GOPZPLPW";
const IBAN = "PL96 2030 0045 1110 00000148 9170";
const NRB = "96 2030 0045 1110 0000 01489170";
const KRS = "0000297262";

const domesticTransferDetails = [
  { label: "Nazwa banku", value: bankName },
  { label: "Numer konta", value: accountNumber },
];

const internationalTransferDetails = [
  ...domesticTransferDetails,
  { label: "BIC", value: BIC },
  { label: "SWIFT", value: SWIFT },
  { label: "IBAN", value: IBAN },
  { label: "NRB", value: NRB },
];

type TileType = {
  label: string;
  value: string;
  onCopy: (title: string, text: string) => void;
};

export const Donation = () => {
  const { toast } = useToast();

  const copyToClipboard = (title: string, text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: title, description: "Skopiowano do schowka" });
  };

  const Tile = ({ label, value }: TileType) => {
    return (
      <div>
        <p className="tracking-wide">{label}</p>
        <div className="border p-2 rounded-lg bg-background flex items-center max-w-sm justify-between">
          <p>{value}</p>
          <Button size={"icon"} variant={"ghost"} className="w-8 h-8">
            <Copy className="text-slate-850/50 w-4 h-4" onClick={() => copyToClipboard(label, value)} />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-secondary py-10" id="darowizny">
      <div className="container">
        <div>
          <h3 className="text-2xl md:text-3xl font-medium tracking-wider text-slate-800/85">Darowizny</h3>
        </div>
        <div className="my-4 space-y-2 tracking-wide text-justify leading-7">
          <p>
            Nasza działalność opiera się na hojności ludzi takich jak Ty. To dzięki darowiznom, przekazanym 1.5% podatku
            na KRS oraz niesamowitemu zaangażowaniu wolontariuszy, możemy dalej działać.
          </p>
          <p>
            Twoja darowizna to nie tylko wsparcie finansowe, to obietnica lepszego życia dla naszych podopiecznych.
            Każdy grosz pomaga w zapewnieniu opieki weterynaryjnej, karmy, ciepła i nadziei.
          </p>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="domestic-transfer">
              <AccordionTrigger>Dane do przelewów krajowych</AccordionTrigger>
              {domesticTransferDetails.map((detail, i) => (
                <AccordionContent key={i}>
                  <Tile label={detail.label} value={detail.value} onCopy={copyToClipboard} />
                </AccordionContent>
              ))}
            </AccordionItem>

            <AccordionItem value="international-transfer">
              <AccordionTrigger>Dane do przelewów zagranicznych</AccordionTrigger>
              {internationalTransferDetails.map((detail, i) => (
                <AccordionContent key={i}>
                  <Tile label={detail.label} value={detail.value} onCopy={copyToClipboard} />
                </AccordionContent>
              ))}
            </AccordionItem>
            <AccordionItem value="krs">
              <AccordionTrigger>Dane do przekazania podatku 1.5% KRS</AccordionTrigger>

              <AccordionContent>
                <Tile label={"KRS"} value={KRS} onCopy={copyToClipboard} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
