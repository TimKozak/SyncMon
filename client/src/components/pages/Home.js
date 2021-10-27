import React, { Fragment } from "react";

import SearchBar from "../layout/SearchBar";
import MenuBtn from "../layout/MenuBtn";
import Syncs from "../syncs/Syncs";
import UploadModal from "../modals/UploadModal";
import EditModal from "../modals/EditModal";
import InfoModal from "../modals/InfoModal";

const Home = () => {
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <InfoModal />
        <EditModal />
        <UploadModal />
        <MenuBtn />
        <Syncs />
      </div>
    </Fragment>
  );
};

export default Home;
