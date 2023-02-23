import Head from "next/head";

type PageLayoutProps = {
    headerText: string,
    children: JSX.Element,
}

export default function PageLayout(props: PageLayoutProps) {
    const { headerText, children } = props;

    return (
        <>
    <div className="page-layout">
        <h1>{headerText}</h1>
        {children}
    </div>
    </>
    )
}