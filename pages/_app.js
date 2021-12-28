import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>
        <p>© 2021 Jeremy</p>
      </footer>;
    </div>
  );
}

export default MyApp;
