async function getBrokenData() {
  throw new Error("Database connection failed");
}

export default async function ErrorPage() {
  const data = await getBrokenData();

  return (
    <div>
      <h2>Error Example</h2>
      <p>{data}</p>
    </div>
  );
}
/*
page.js throws an error
Next.js catches it
error.js is rendered instead
User can retry using reset()
*/
