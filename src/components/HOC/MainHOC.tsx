import React from "react";

const MainHOC = (WrappedComponent) => {
  const ProtectedComp = (props) => {
    const isLogin = props.isLogin ?? props.login;

    if (!isLogin) {
      return <p>Please login again</p>;
    }

    return <WrappedComponent {...props} />;
  };

  return ProtectedComp;
};

export default MainHOC;
