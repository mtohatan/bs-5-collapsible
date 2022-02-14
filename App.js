import React from "react";
import { useState, useEffect } from "react";
import { Collapse } from "bootstrap";

import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import { Panel, PanelGroup } from "rsuite";

function CollapseDemo() {
  var [toggle, setToggle] = useState(false);

  useEffect(() => {
    var myCollapse = document.getElementById("collapseTarget");
    var bsCollapse = new Collapse(myCollapse, { toggle: false });
    toggle ? bsCollapse.show() : bsCollapse.hide();
  });
  function ShowArrow() {
    if (toggle) {
      return <FaArrowCircleDown />;
    } else {
      return <FaArrowCircleUp />;
    }
  }
  return (
    <div className="py-2">
      <Panel header="Panel title" collapsible bordered>
        {/* <Paragraph /> */}
        This is a test
      </Panel>
      <button
        className="btn btn-primary"
        onClick={() => setToggle((toggle) => !toggle)}
      >
        Toggle collapse
        {ShowArrow()}
      </button>
      <div className="collapse" id="collapseTarget">
        This is the toggle-able content!
      </div>
    </div>
  );
}

function App() {
  const [mounted, setMounted] = useState(true);

  return (
    <div className="container py-4">
      <h3>Bootstrap 5 Collapse with React</h3>
      {mounted && (
        <div>
          <CollapseDemo />
        </div>
      )}
    </div>
  );
}

export default App;
