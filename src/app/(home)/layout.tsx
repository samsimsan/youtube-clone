import { HomeRootLayout } from "@/modules/home/ui/layouts/home-layout";


interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <HomeRootLayout>
            {children}
        </HomeRootLayout>
    )
}

export default RootLayout