

import Home from "./home/page";

export const dynamic = "force-static";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {

  return (
    <>
      <Home
     

      />
    </>
  );
}
