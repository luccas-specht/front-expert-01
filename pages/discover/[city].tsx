import { useRouter } from 'next/router';

export default function Discover() {
  const {
    query: { city },
  } = useRouter();

  return <h1>{city}</h1>;
}
