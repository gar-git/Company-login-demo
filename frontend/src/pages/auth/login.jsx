import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';
import axios from 'axios';

// project import
import useAuth from 'hooks/useAuth';
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthLogin from 'sections/auth/auth-forms/AuthLogin';

// ================================|| LOGIN ||================================ //

const Login = () => {
  const [companyLogin, setCompanyLogin] = useState(null);
  const { isLoggedIn } = useAuth();

  var currentUrl = window.location.href;

  useEffect(() => {
    const getCompanyLogin = async () => {
      try {
        // Use regular expression to match the pattern and extract the id
        var match = currentUrl.match(/\/login\/([^/]+)\/?$/);
        console.log(match);

        if (match) {
          // Extracted id is in the second capturing group (index 1)
          const req = match[1];
          const result = await axios.post('http://localhost:6969/getCompanyLoginByCompanyCode', { companyCode: req });
          setCompanyLogin(result.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCompanyLogin();
  }, []);

  return (
    <AuthWrapper companyLogin={companyLogin}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Login</Typography>
            <Typography
              component={Link}
              to={isLoggedIn ? '/auth/register' : '/register'}
              variant="body1"
              sx={{ textDecoration: 'none' }}
              color="primary"
            >
              Don&apos;t have an account?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLogin isDemo={isLoggedIn} />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;
