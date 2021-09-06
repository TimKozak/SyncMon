import React, { Fragment, useState } from "react";

import SearchBar from "../layout/SearchBar";
import MenuBtn from "../layout/MenuBtn";
import Syncs from "../syncs/Syncs";
import UploadModal from "../modals/UploadModal";

const Home = () => {
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <UploadModal />
        <MenuBtn />
        <Syncs />
      </div>
    </Fragment>
  );
};

export default Home;
