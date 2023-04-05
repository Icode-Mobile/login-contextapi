import { useEffect } from 'react';

import AppRoute from './app.routes';
import AuthRoute from './auth.routes';

export default function RootRoutes() {
  useEffect(() => {}, []);

  return <AppRoute />;
}
