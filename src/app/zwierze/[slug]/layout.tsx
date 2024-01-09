export async function generateMetadata({ params }: { params: { slug: string } }) {
  const firstLetter = params.slug.charAt(0).toUpperCase();
  const restLetters = params.slug.slice(1);
  const name = firstLetter + restLetters;
  return {
    title: `${name}`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
