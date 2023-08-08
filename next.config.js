/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{ hostname: "*.supabase.co" }],
	},
}

module.exports = nextConfig
