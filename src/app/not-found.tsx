import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col ontainer text-center justify-center my-20">
      <h3>Ups, coś poszło nie tak.</h3>
      <Button asChild variant="link">
        <Link href="/">Wróć do strony głównej</Link>
      </Button>
    </div>
  );
}
