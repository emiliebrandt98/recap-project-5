
import Navigation from "../Components/Navigation/Navigation.jsx";



export default function HomePage ({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
