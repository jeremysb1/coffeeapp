import { useRouter } from 'next/router';
import Link from 'next/link';

import coffeeStoresData from '../../data/coffee-stores.json';

export function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      CoffeeStore: coffeeStoresData.find(CoffeeStore => {
        return coffeeStore.id === params.id // dynamic id
      })
    }
  }
}

const CoffeeStore = () => {
  const router = useRouter();
  return (
    <div>Coffee Shop Page {router.query.id}
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