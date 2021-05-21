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
 session:{
  jwt: false,

  // Seconds - How long until an idle session expires and is no longer valid.
  maxAge: 30 * 24 * 60 * 60, // 30 days

  // Seconds - Throttle how frequently to write to database to extend a session.
  // Use it to limit write operations. Set to 0 to always update the database.
  // Note: This option is ignored if using JSON Web Tokens
  updateAge: 24 * 60 * 60, // 24 hours
   },
debug: true,
  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
})