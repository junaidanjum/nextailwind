import '@/styles/globals.css'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'

// import { Lato } from 'next/font/google'
// const font = Lato({ weight: ['100', '300', '400', '700', '900'], subsets: ['latin'] })
// const PRIMARY_COLOR = 'red'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ConfigProvider
		// theme={{
		// 	token: {
		//		fontFamily: font.style.fontFamily,
		// 		borderRadius: 0,
		// 		colorPrimary: PRIMARY_COLOR
		// 	}
		// }}
		>
			<Component {...pageProps} />
		</ConfigProvider>
	)
}
