import ScrollingAppBar from "../components/landing/appBar/ScrollingAppBar";
import Body from "../components/landing/body/Body";
import Head from "next/head";
import { hero } from "./utils/siteConfig";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href={hero.heroImage}
          as="image"
          type="image/webp"
        />
      </Head>
      <div>
        <ScrollingAppBar />
        <Body
          // images={gallery.images}
          heroImage={hero.heroImage}
          // masterPlan={location.masterPlan}
          // floorPlanImages={floorPlans.images}
        />
      </div>
    </>
  );
}
