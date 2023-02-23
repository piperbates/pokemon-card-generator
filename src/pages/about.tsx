import PageLayout from "@/components/Layout/PageLayout";
import Link from "next/link";

export default function AboutPage() {
    return (
        <PageLayout headerText="About">
            <Link href="/">Back to the app</Link>
        </PageLayout>
    )
}