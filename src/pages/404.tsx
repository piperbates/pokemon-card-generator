import PageLayout from "@/components/Layout/PageLayout";
import Link from "next/link";

export default function PageNotFound() {
    return <>
    <PageLayout headerText="Page Not Found">
        <div>
            <p>Page not found</p>
            <Link href='/'>Go back home</Link>
        </div>
    </PageLayout>
    </>
}