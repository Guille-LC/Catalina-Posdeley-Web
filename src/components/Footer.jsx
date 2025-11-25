import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-neutral-primary-soft">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link href="https://flowbite.com/" className="flex items-center">
                        <Image src="/butterflylogo.png" alt="butterfly"  width={28}height={28} className="h-7 me-3" />
                        <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">Catalina Posdeley</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                    <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Resources</h2>
                    <ul className="text-body font-medium">
                        <li className="mb-4"><Link href="https://flowbite.com/" className="hover:underline">Flowbite</Link></li>
                        <li><Link href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</Link></li>
                    </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                    Follow us
                  </h2>
                  <ul className="text-body font-medium">
                    <li className="mb-4">
                      <Link
                        href="https://github.com/themesberg/flowbite"
                        className="hover:underline"
                      >
                        Github
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Discord
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                    Legal
                  </h2>
                  <ul className="text-body font-medium">
                    <li className="mb-4">
                      <Link href="#" className="hover:underline">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
    );
}