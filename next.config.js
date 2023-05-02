/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		scrollRestoration: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: "/dldwdlimr/image/upload/**",
			},
		],
	},
};

module.exports = nextConfig
