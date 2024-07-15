import { $signInStore } from '@clerk/astro/client';

const SignInWithReact = () => {
  function signIn() {
    $signInStore.get()?.authenticateWithRedirect({
      strategy: 'oauth_google',
      redirectUrl: '/sso-callback-react',
      redirectUrlComplete: '/'
    })
  }

  return <button className="pink" onClick={signIn}>Sign in with Google (React)</button>
}

export default SignInWithReact
