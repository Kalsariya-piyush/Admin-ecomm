import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  const authState = useSelector((state) => state);

  const { user, isLoading } = authState.auth;

  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/');
    }

    if (!isLoading && user) {
      setIsLoadingAuth(false);
    }
  }, [isLoading, user]);

  return (
    <div>
      {isLoadingAuth ? (
        <div className="d-flex justify-content-center align-items-center flex-row py-5">
          <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
            <span class="loader mx-auto"></span>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default PrivateRoute;
