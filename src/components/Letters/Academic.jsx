import React, { useRef, useState } from "react";
import html2canvas from "@nidi/html2canvas";
import jsPDF from "jspdf";
import { toast } from "react-toastify";
import axios from "axios";
import { MdOutlineFileDownload } from "react-icons/md";
import Sidebar from "../../pages/admin/Sidebar";
const Academic = () => {
  const noticeRef = useRef(null);
  const [data, setData] = useState({
    title: "Ref. No.: SVGOI/Admin/2024/38",
    date: "",
    description:"",
    batch: "academic",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSaveHandle = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/api/v1/createNotice",
        data
      );
      console.log(res);
      toast.success("Notice saved successfully");
      printDocument();
    } catch (error) {
      console.error("Error occurred while saving notice:", error);
      toast.error("Failed to save notice. Please try again later.");
    }
  };

  const printDocument = () => {
    const input = noticeRef.current;

    html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
      pdf.save("download.pdf");
    });
  };

  return (
    <div className="bg-gray-400">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 sticky">
        <div className="col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1">
          <aside className='sticky top-[1px] x-[3]'>
            <Sidebar/>
          </aside>
        </div>
        <div className="col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-1 p-5">
        <div className="flex justify-center mb-4 mt-8">
        <button
          onClick={onSaveHandle}
          className="bg-blue-950 hover:bg-red-500 duration-150 mx-2 text-white font-bold py-2 px-4"
        >
          Save <MdOutlineFileDownload className="inline text-white " size={24} />
        </button>
        <button
          className="bg-blue-950 hover:bg-red-500 duration-150 mx-2 text-white font-bold py-2 px-4"
        >
          Share
        </button>
      </div>
      <div>
        <div
          ref={noticeRef}
          className="p-9"
          style={{
            width: "210mm",
            margin: "auto",
            backgroundColor: "white",
          }}
        >
          <div>
            <h2 className="font-bold text-3xl">
              Swami Vivekanand Group of Institutes,
            </h2>
            <p className="font-medium">
              Chandigarh Patiala National Highway, Ram Nagar, Banur
            </p>
            <div className="w-full h-[1.5px] bg-slate-400" />
            <div className="flex justify-between">
              <div>
                <input
                  name="title"
                  type="text"
                  className="outline-none border-none text-base tracking-eide text-txtDark w-[250px] bg-gray-200"
                  value={data.title}
                  onChange={changeHandler}
                />
              </div>
              <div>
              Date:{" "}
                <input
                    name="date"
                    className="h-[max-content] leading-relaxed relative top-[3px] left-1 align-middle bg-transparent border-0 ring-0 focus:ring-0 focus:border-0 focus:ring-transparent focus:border-transparent pb-2 inline-block "
                    value={data.date}
                    onChange={changeHandler}
                    type="date"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <h2 className="text-lg font-bold underline">Notice</h2>
          </div>
          <div className="text-center mt-10 break-normal">
            <textarea
              className="text-xs mt-4 text-txtPrimary resize-none h-[100px] tracking-wider w-full outline-none break-normal border-none bg-gray-200"
              name="description"
              rows="3"
              value={data.description}
              onChange={changeHandler}
              style={{ wordBreak: "break-word" }}
              wrap="hard"
            ></textarea>
          </div>

          <div>
            <p className="text-sm font-bold mt-[100px]">Principal</p>
            <p className="text-sm font-bold ">SVIET</p>
          </div>
          <div className="mt-8">
            <p className="text-sm underline font-bold">CC to:-</p>
            <p className="text-sm">
              Hon'ble Chairman/President for their kind information;
            </p>
            <p className="text-sm">All Directors/Principals;</p>
            <p className="text-sm">All concerned Officials;</p>
            <p className="text-sm">Notice Board;</p>
            <p className="text-sm">Head of the Accounts.</p>
          </div>
        </div>
      </div>
        </div>
      </div>
        
        
      
    </div>
  );
};

export default Academic;
