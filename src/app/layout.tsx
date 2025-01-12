import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '../styles/global.scss';

const robotoFont = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Nextjs demo',
    description: 'Demo project in nextjs',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${robotoFont.className}`}>{children}</body>
        </html>
    );
}
