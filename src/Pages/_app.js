import Home from "../components/Home";

export default function App({ Component, pageProps }) {
    return (
        <div>
            <Home />
            <Component {...pageProps} />
        </div>
    );
}