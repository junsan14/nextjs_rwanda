// components/SlowContent.jsx
async function getSlowData() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return "Data loaded successfully!";
}

export default async function SlowContent() {
  const data = await getSlowData();
  return <p>{data}</p>;
}
