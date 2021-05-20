import NextAuth from 'next-auth'
import { signOut } from 'next-auth/client'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Discord({
        clientId: process.env.DISCORD_ID,
        clientSecret: process.env.DISCORD_SECRET,
    }),
    Providers.Google({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        
    }),
    Providers.Facebook({
        clientId: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
    })
    // ...add more providers here
  ],
  pages:{
    signIn:'/login',
    signOut:'/logout',
    newUser:'/dashboard',
    
  },
 

debug: true,
  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
})