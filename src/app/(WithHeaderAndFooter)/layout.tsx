import Footer from '@/layout/Footer'
import Header from '@/layout/Header'

export default function RootLayout({
    children,

}: {
    children: React.ReactNode,

}) {
    return (
        <>
            <Header />
            {children}
            <Footer />

        </>
    )
}