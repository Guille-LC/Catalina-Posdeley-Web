import Footer from "../components/Footer";
import Main from "../components/Main";

export const metadata = {
  title: "Catalina Posdeley | Sitio Oficial",
  description: "Sitio web de Catalina Posdeley",
  keywords: ["catalinaposdeley", "literatura", "argentina", "literatura fantastica"]
}

export default function Home() {
  return (
      <>
        <Main />
        <Footer />
      </>
  );
}
