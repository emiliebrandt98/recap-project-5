
import Navigation from "../Components/Navigation/Navigation.jsx";



export default function HomePage ({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}


// <!---CODE -->
// import Spotlight from "@/Components/Spotlight/Spotlight";

// export default function HomePage() { 
//   return <Spotlight />;
// }
// 