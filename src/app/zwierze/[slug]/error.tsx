"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col ontainer text-center justify-center my-20">
      <h3>Profil nie istnieje</h3>
      <Button asChild variant="link">
        <Link href="/adoptuj">Zobacz inne zwierzęta</Link>
      </Button>
    </div>
  );
}
