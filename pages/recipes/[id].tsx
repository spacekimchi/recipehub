import prisma from '../../lib/prisma';
import Date from '../../components/date';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let recipe = await prisma.recipe.findUnique({
    where: {
      id: String(params?.id),
    },
    select: {
      id: true,
      title: true,
      url: true,
      body: true,
      instructions: true,
      ingredients: true,
      createdAt: true,
    }
  });
  // TODO: find some other way to parse this using prisma..
  //       or migrate away from prisma all together
  recipe.createdAt = recipe.createdAt.toString();
  return {
    props: {
      recipe,
    }
  }
}

export default function Recipe({ recipe }) {
  return (
    <>
      <div>
        {recipe.id}
        <br/>
        {recipe.title}
        <br/>
        {recipe.url}
        <br/>
        {recipe.body}
        <br/>
        <Date dateString={recipe.createdAt}/>
        <br/>
        {
          recipe.ingredients.map((ingredient, index) => (
            <div key={index}>{ingredient}</div>
          ))
        }
        <br/>
        {
          recipe.instructions.map((instruction, index) => (
            <div key={index}>{instruction}</div>
          ))
        }
        <br/>
      </div>
    </>
  );
}


