import Header from "../components/SiteStructure/Header.js";

export default function Home() {
  return (
    <div>
      <Header
        title="Yes! &bull; React Skit"
        url="http://localhost:3000/talks"
        imgURL="http://localhost:3000/images/social-banner.png"
        description="Explore the Blogs Steven is currently working on."
      />
    </div>
  );
}
