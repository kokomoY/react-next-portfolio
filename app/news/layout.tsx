import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

export const metadata = {
    title: "ニュース",
};

type Props = {
    children: React.ReactNode;
};0

export const revalidate = 60;

export default function NewLayout({ children }: Props) {
    return (
        <>
            <Hero title="News" sub="ニュース" />
            <Sheet>{children}</Sheet>
        </>
    );
}