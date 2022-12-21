/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "items.sodeq.org",
				port: "",
				pathname: "/img/*",
			},
		],
	},
};

module.exports = nextConfig;
