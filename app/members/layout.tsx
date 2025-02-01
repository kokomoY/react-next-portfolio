import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

export const metadata = {
    title: "About",
};

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
        <>
            <Hero title="About Me" sub="自己紹介" />
            <Sheet>{children}</Sheet>
        </>
    );
}