import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';

export default function Car({ car }) {
  const router = useRouter();

  const { id } = router.query;

  return (
    <>
      <Head>
        <title>
          {car.color} {car.id}
        </title>
      </Head>
      <h1>Hello {id}</h1>
      <Image src={car.image} alt={car.id} width={500} height={500} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: { car: data },
  };
}

// export async function getStaticProps({ params }) {
//   const req = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await req.json();

//   return {
//     props: { car: data },
//   };
// }

// export async function getStaticPaths() {
//   const req = await fetch('http://localhost:3000/cars.json');
//   const data = await req.json();
//   console.log(`getStaticPaths:`, data);

//   const paths = data.map((car) => {
//     return { params: { id: car } };
//   });
//   console.log(paths);

//   return {
//     paths,
//     fallback: false,
//   };
// }
