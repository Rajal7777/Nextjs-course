export default function MealDetailsPage({params}) {
  console.log('link',params)
  return (
    <>
    <h1>meals page</h1>
    <p>{params.mealSlug}</p>
    </>
  )
}
