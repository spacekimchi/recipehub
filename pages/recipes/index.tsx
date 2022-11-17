import prisma from '../../lib/prisma';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async () => {
  const recipes = await prisma.recipe.findMany({
    select: {
      id: true,
      title: true,
      url: true,
      body: true,
      instructions: true,
      ingredients: true,
    },
  });
  return {
    props: { recipes },
    revalidate: 10,
  }
}

export default function Recipe({ recipes }) {
  return (
    <div>
      <ul>
        { recipes.map(({id, title, url}) => (
          <li key={id}>
            <Link href={`/recipes/${id}`}>{title}</Link>
            <br/>
            <p>{url}</p>
            <br/>
          </li>
        ))}
      </ul>
    </div>
  );
}
