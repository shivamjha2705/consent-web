import { MdOutlineMenu } from "react-icons/md";
import { useContext, useEffect, useRef, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";

const AreaTop = () => {
  const { openSidebar } = useContext(SidebarContext);

  return (
    <section className="content-area-top d-flex d-lg-none position-fixed bg-secondary-subtle py-2 px-3 " style={{top:"20px",borderRadius:"0 20px 20px 0"}}>
      <div className="area-top-l">
        <button
          className="sidebar-open-btn"
          type="button"
          onClick={openSidebar}
        >
          <MdOutlineMenu size={24} />
        </button>
      </div>
    </section>
  );
};

export default AreaTop;
