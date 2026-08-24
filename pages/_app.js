import GlobalStyle from "../styles";
import Navigation from "../Components/Navigation/Navigation.jsx";

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
