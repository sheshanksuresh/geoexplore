import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Card from "../components/Card";
import { Routes, Route, Link } from "react-router-dom";

import useDrag from "../useDrag.ts";
import RestaurantScreen from "./RestaurantScreen";

const HomeScreen = ({ data }) => {
  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag = ({ scrollContainer }) => (ev) =>
    dragMove(ev, (posDiff) => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft += posDiff;
      }
    });

  return (
    <>
      <div className="section hamilton-title">
        <div className="title-text">
          <span>Welcome to</span>
          <span className="hamilton-text">Hamilton</span>
        </div>
      </div>
      <div className="section card-section">
        <div className="container">
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onMouseDown={() => dragStart}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
          >
            {data.map((item) => (
              <Card
                itemId={item.id} // NOTE: itemId is required for track items
                title={item.name}
                key={item.id}
                link={item.link}
                //selected={isItemSelected(id)}
              />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
};

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(
    VisibilityContext
  );

  return (
    <div style={{ width: "40px", cursor: "pointer" }}>
      {!isFirstItemVisible && (
        <IoIosArrowBack size={40} onClick={() => scrollPrev()} />
      )}
    </div>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <div style={{ width: "40px", cursor: "pointer" }}>
      {!isLastItemVisible && (
        <IoIosArrowForward size={40} onClick={() => scrollNext()} />
      )}
    </div>
  );
}

export default HomeScreen;

{
  /* <Router>
<div id="navbar-color" className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white shadow-sm">
  <h3 className="my-0 mr-md-auto font-weight-normal"><NavLink id="navlink" className="text-light" exact activeClassName='active' to="/">Tariq Jambocus</NavLink></h3>
  <nav className="my-2 my-md-0 mr-md-3">
    <NavLink id="navlink" className="p-2 text-light" activeClassName='active-2' exact to="/designs">Designs</NavLink>
    <NavLink id="navlink" className="p-2 text-light" activeClassName='active-2' exact to="/photography">Photography</NavLink>
    <NavLink id="navlink" className="p-2 text-light" activeClassName='active-2' exact to="/videography">Videography</NavLink>
    <NavLink id="navlink" className="p-2 text-light" activeClassName='active-2' exact to="/contact">Contact</NavLink>
  </nav>
</div>

<Route path="/" exact render={() => <Home/>}/>
<Route path="/designs" exact render={() => <Designs designItems={designItems} classTitle={'title-design'} title={'Designs'} isnaImages={isnaImages} yqImages={YQImages} hunImages={hunImages} designDam={designDam}
          AlImages={AlImages} PersImages={PersImages} souladriImages={souladriImages} userImages={userImages}/>}/> 
<Route path="/photography" exact render={() => <Photography designItems={photoItems} classTitle={'title-photography'} title={'Photography'} deenagerImages={photoDeenagers} isnaImages={profImages} PersImages={photoPersImages}/>}/>
<Route path="/videography" exact render={() => <Videography classTitle={'title-videography'} title={'Videography'} videoItems={videoItems} jamiVideos={jamiVideos} ramadanVideos={ramadanVideos}/>}/>
<Route path="/contact" exact render={() => <Contact/>}/>
<div className="footer">
<h4>Website created by Hargun Bedi</h4>
</div>
</Router> */
}
