import Header from "../components/SiteStructure/Header.js";

export default function Custom404() {
  return (
    <div>
      <Header title="Ups...page not found &bull; React Skit" />

      <p style={{marginTop: '10px'}}>Ups! Try something else!</p>
    </div>
  );
}
