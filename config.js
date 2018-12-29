const common = {
    twitter: {
        consumerKey: process.env.TWITTER_KEY || 'rzpMWZlgvEsWPzAXDuEbUz6yo',
        consumerSecret: process.env.TWITTER_SECRET || 'LEtHLTcAa4zs14B70GWxvTK64icVohdPCTyuVy6yvZ4QLm2mmf',
        callbackURL: '/auth/twitter/callback'
    },
    google: {
        clientID: process.env.GOOGLE_ID || '254636440862-gqrc7t68pdsn69rajr3p0uhj19vtoc4m.apps.googleusercontent.com',
        clientSecret: process.env.GOOGLE_SECRET || 'rfGh2N9cZWoZFoP4hG6-bzYa',
        callbackURL: '/auth/google/callback'
    },
    github: {
        clientID: process.env.GITHUB_ID || 'df9a352357d3148fed86',
        clientSecret: process.env.GITHUB_SECRET || '5fad2153e1cfc7d0cd6973af760fba43c1d9a32a',
        callbackURL: '/auth/github/callback'
    }
}