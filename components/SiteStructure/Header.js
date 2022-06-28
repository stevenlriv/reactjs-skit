import Head from "next/head";
import Script from "next/script";

const Header = (props) => {
  return (
    <div>
        <Head>
          <title>{props.title}</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <link rel="canonical" href={props.url} />
          <meta name="description" content={props.description} />

          <meta property="og:title" content={props.title} />
          <meta property="og:type" content="website" /> {/** "article" for articles and "website" for the rest of your pages  */}
          <meta property="og:description" content={props.description} />
          <meta property="og:image" content={props.imageURL} /> {/** Use images with a 1.91:1 ratio and minimum recommended dimensions of 1200x630 for optimal clarity across all devices.  */}
          <meta property="og:url" content={props.url} /> 

          {/** You can include favicons here from RealFaviconGenerator */}
        </Head>
    </div>
  );
};

export default Header;