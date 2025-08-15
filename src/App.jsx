import React from "react";
import Certifcate from "./components/Certificate/Certifcate";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Form from "./components/Form";
import { useState } from "react";

const App = () => {
  const printComponentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printComponentRef.current,
  });
  const [preview, setPreview] = useState(false);
  const handleClick = () => setPreview(!preview);
  return (
    <div className="min-h-screen">
      <div className="flex flex-wrap">
        <div className="flex-1">
          <Form />
        </div>

        {preview ? (
          <div
            onClick={handleClick}
            className=" overflow-y-auto h-screen bg-black/75 inset-0 w-full absolute flex cursor-pointer"
          >
            <div className="z-50 pointer-events-none scale-75 -top-32 inset-0 absolute">
              <Certifcate ref={printComponentRef} />
            </div>
          </div>
        ) : (
          <div
            onClick={handleClick}
            className="scale-50 overflow-hidden relative border-2 rounded flex w-[360px] h-[460px] cursor-pointer"
          >
            <div className="pointer-events-none absolute scale-[0.4] -top-72 -left-32 ">
              <Certifcate ref={printComponentRef} />
            </div>
          </div>
        )}
      </div>
      <button
        className="bg-gray-400 text-white px-4 py-1.5 rounded fixed top-5 right-5"
        onClick={handlePrint}
      >
        Download
      </button>
    </div>
  );
};

export default App;
