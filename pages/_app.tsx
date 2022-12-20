import "../styles/globals.css";
import type { AppProps } from "next/app";
import { storeWrapper } from "../store/store";
import { Provider } from "react-redux";

function App({ Component, pageProps }: AppProps) {
	const { store } = storeWrapper.useWrappedStore(pageProps);
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default App;
