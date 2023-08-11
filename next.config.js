/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://13.50.73.17/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `http://13.50.73.17/api/uploads/:path*`,
			},
		]
	},
}

module.exports = nextConfig
