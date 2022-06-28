import MainMenu from "./MainMenu.js";
import Footer from "./Footer.js";

export default function Layout({ children }) {
  return (
    <div>
      <MainMenu />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
