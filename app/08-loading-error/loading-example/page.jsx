
async function getSlowData() {
  // simulate slow data (5 seconds)
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return "Data loaded successfully!";
}

export default async function LoadingPage() {
  const data = await getSlowData();

  return (
    <div>
      <h2>Loading Example</h2>
      <p>{data}</p>
    </div>
  );
}



/*
How it works (concept)
page.js fetches slow data
While waiting, Next.js automatically shows loading.js
When data is ready → page.js replaces loading UI

✅ This is a Server Component
✅ Async function triggers loading state
*/
