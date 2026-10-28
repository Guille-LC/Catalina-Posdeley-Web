import Image from 'next/image';
import Link from 'next/link';

interface FooterLink {
    label: string
    href: string
}

const links: FooterLink[] = [
    { label: 'Inicio', href: '/' },
    { label: 'Obras', href: '/obras/all' },
    { label: 'La autora', href: '/autora' },
    { label: 'Newsletter', href: '/newsletter' },
];

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-neutral-primary-soft">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between md:items-center">
                    <Link href="/" className="flex items-center mb-6 md:mb-0">
                        <Image src="/butterflylogo.png" alt="butterfly" width={28} height={28} className="h-7 me-3" />
                        <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">Catalina Posdeley</span>
                    </Link>
                    <ul className="flex flex-wrap gap-6 text-body font-medium">
                        {links.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className="hover:underline">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="mt-6 text-sm text-body">&copy; {year} Catalina Posdeley. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
