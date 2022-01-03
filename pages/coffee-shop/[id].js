import { useRouter } from 'next/router';
import Link from 'next/link';

import coffeeStoresData from '../../data/coffee-stores.json';

export function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStoresData.find(coffeeStore => {
        return coffeeStore.id.toString() === params.id // dynamic id
      })
    }
  }
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { id: '0' } },
      { params: { id: '1' } }
    ],
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  const router = useRouter();

  const { address, name, neighborhood } = props.coffeeStore;

  if(router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <p>{address}</p>
      <p>{name}</p>
      <p>{neighborhood}</p>
    </div>
  );
};

export default CoffeeStore;