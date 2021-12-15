import { useRouter } from 'next/router';
import Link from 'next/link';

const CoffeeStore = () => {
  const router = useRouter();
  return (
    <div>Coffee Shop Page
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <Link href="/coffee-shop/dynamic">
        <a>Go to page dynamic</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;