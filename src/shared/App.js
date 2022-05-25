import React, { useRef, useEffect, useState, lazy, Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Route, Switch } from "react-router-dom";
import { gsap } from "gsap";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import {
  Login,
  Main,
  Signup,
  SaleMap,
  MyPage,
  Like,
  SearchPage,
  NotFound,
  DetailOffice,
  Splash,
  QNA,
  DetailShare,
  Notice,
  WithDraw,
  Member,
  HotPlaceArticle,
  Event,
  EditProfile,
} from "../pages/index";
import { MobileFrame } from "../components/shared/home";
import KaKaoLogin from "../components/social/KaKaoLogin";

import GoogleLogin from "../components/social/GoogleLogin";
import { LoadSpinner } from "../components/shared/home";
//css
import GlobalStyle from "../style/GlobalStyle";
import theme from "../style/theme";
import backgroundImg from "../assets/bg.jpg";
import textImg from "../assets/bg02.png";
import textImg02 from "../assets/bg03.png";

const MapOfficeList = lazy(() => import("../pages/MapOfficeList"));
const MapShareList = lazy(() => import("../pages/MapShareList"));
const Start = lazy(() => import("../pages/Start"));

// import ScrollToTop from "../components/shared/ScrollToTop";

// import { useLocation } from "react-router-dom";

function App() {
  //const { pathname } = useLocation();
  // const mobileFrame = useRef();

  //console.log(pathname, "path");

  // useEffect(() => {
  //   // const element = document.getElementById("mobileFrame");
  //   // element.scrollTo(0, 0);
  //   // window.scrollTo(0, 0);
  //   if (pathname) {
  //     mobileFrame.current.scrollTo(0, 0);
  //     console.log("called");
  //   }
  // }, [pathname]);

  // const element = document.getElementById("mobileFrame");
  // element.scrollTo(0, 0);

  const textRef = useRef();
  const text2Ref = useRef();
  const [active, setActive] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => remove(), 2000);
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => show(), 4000);
    return () => clearTimeout(timeout);
  }, []);

  const remove = () => {
    const ani = gsap.to(textRef.current, {
      x: -773,
      display: "none",
      duration: 1,
      ease: "strong.inOut",
      onComplete: () => setActive(false),
    });
    return () => {
      ani.kill();
    };
  };
  const show = () => {
    const ani2 = gsap.to(text2Ref.current, {
      x: 863,
      duration: 1,
      ease: "strong.inOut",
    });
    return () => {
      ani2.kill();
    };
  };
  return (
    <>
      <Wrap>
        <Background>
          <TextImg ref={textRef} />
          {!active && <Text02Img ref={text2Ref} />}
        </Background>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            {/* <ScrollToTop history={history}> */}
            <MobileFrame className="MobileFramePage">
              <Suspense fallback={<LoadSpinner />}>
                <Switch>
                  <Route path="/" exact component={Splash} />
                  <Route path="/start" exact component={Start} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/signup" exact component={Signup} />
                  <Route
                    path="/user/google/callback"
                    exact
                    component={GoogleLogin}
                  />
                  <Route
                    path="/user/kakao/callback"
                    exact
                    component={KaKaoLogin}
                  />
                  <Route path="/main" exact component={Main} />
                  <Route path="/search" exact component={SearchPage} />
                  <Route path="/officemap/:name" exact component={SaleMap} />
                  <Route path="/mypage" exact component={MyPage} />
                  <Route path="/mypage/qna" exact component={QNA} />
                  <Route path="/mypage/notice" exact component={Notice} />
                  <Route path="/mypage/member" exact component={Member} />
                  <Route path="/mypage/withdraw" exact component={WithDraw} />
                  <Route path="/mypage/profile" exact component={EditProfile} />
                  <Route path="/like" exact component={Like} />
                  <Route path="/map/office" exact component={MapOfficeList} />
                  <Route
                    path="/map/shareoffice"
                    exact
                    component={MapShareList}
                  />
                  <Route
                    path="/detail/:estateId"
                    exact
                    component={DetailOffice}
                  />
                  <Route
                    path="/detail/share/:shareofficeid"
                    exact
                    component={DetailShare}
                  />
                  <Route
                    path="/hotplacearticle/:name"
                    exact
                    component={HotPlaceArticle}
                  />
                  <Route path="/event" exact component={Event} />
                  <Route path="/*" component={NotFound} />
                </Switch>
              </Suspense>
            </MobileFrame>

            {/* </ScrollToTop> */}
          </ConnectedRouter>
        </ThemeProvider>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  .MobileFramePage {
    z-index: 999;
  }
`;
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
const TextImg = styled.div`
  width: 683px;
  height: 373px;
  background-image: url(${textImg});
  background-size: cover;
  position: fixed;
  bottom: 90px;
  left: 90px;
`;
const Text02Img = styled.div`
  width: 690px;
  height: 373px;
  background-image: url(${textImg02});
  background-size: cover;
  position: fixed;
  bottom: 90px;
  left: -773px;
`;
export default App;
