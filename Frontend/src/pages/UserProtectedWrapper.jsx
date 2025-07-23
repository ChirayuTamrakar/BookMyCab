import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const UserProtectedWrapper = ( {children} ) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
      if(!token) {
        navigate('/login');
      }

    }, [token, navigate]) // If, for any reason, the navigate function changes (for example, if the router context changes), React will re-run the effect to ensure it uses the latest version.

  return (
    <>
    { children }
    </>
  )
}

export default UserProtectedWrapper;