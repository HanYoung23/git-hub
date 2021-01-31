import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/Home/home";
import Login from "./components/login";
import Klogin from "./components/klogin";
import Request_english from "./components/request_english";

const Routes = (props) => {
  return (
    <Router>
      {/* <ScrollToTop> */}
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/accounts/login" component={Klogin} />
        <Route exact path="/request/:detail" component={Request_english} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
      {/* </ScrollToTop> */}
    </Router>
  );
};

// const ScrollToTop = ({ history, children }) => {
//   useEffect(() => {
//     const unListen = history.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unListen();
//     };
//   }, []);

//   return <>{children}</>;
// };

// export default withRouter(ScrollToTop);

export default Routes;
