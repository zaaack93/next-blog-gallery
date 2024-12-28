export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>
      <div>this div is shared across pages</div>
      <div>this div is only on the hello page</div>
    </div>
  );
}