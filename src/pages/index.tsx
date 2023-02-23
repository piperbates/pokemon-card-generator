import PageLayout from "@/components/Layout/PageLayout";
import Link from "next/link";

export default function Home() {
  return (
    <PageLayout headerText="Welcome to the Pokemon Card Generator">
      <div>
        <Link href='/generator'>Go to the generator</Link>
        <br />
        <Link href='/about'>About</Link>
      </div>
    </PageLayout>
  )
}