import React from "react";
import Input from "./Input";
import { experienceData, softSkillsData, transcriptData } from "../utils/data";
import { useOption, useTechnicalOverallText, userData } from "../state/store";
const Form = () => {
  const { fullName, sex, setFullName, setSex } = userData();
  const { isNewSignature, isExtension, setExtension, setNewSignature } =
    useOption();
  const { generalText, setGeneralText } = useTechnicalOverallText();
  return (
    <div className="p-4 font-medium text-gray-900 font-Montserrat">
      <div className="grid gap-3 pb-4 mb-4 border-b sm:grid-cols-2 lg:grid-cols-3">
        <Input
          name="Full Name"
          value={fullName}
          setValue={setFullName}
          type="text"
          placeholder="Full Name"
        />
        <select
          className="placeholder:capitalize border border-solid border-gray-300 rounded-lg shadow-sm max-w-[180px] focus:outline-none px-2 py-1"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <div className="flex gap-20">
          <label className="flex items-center gap-2">
            With Soft Skills
            <input
              type="checkbox"
              name="extension"
              checked={isExtension}
              onChange={(e) => setExtension(e.target.value)}
            />
          </label>
          <label className="flex items-center gap-2">
            <span>With New Signature</span>
            <input
              type="checkbox"
              name="extension"
              checked={isNewSignature}
              onChange={(e) => setNewSignature(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          {transcriptData().map((data, id) => (
            <Input key={id} {...data} />
          ))}
        </div>

        <div className="space-y-2">
          {experienceData().map((data, id) => (
            <Input key={id} {...data} />
          ))}
        </div>
        <div className={`space-y-2 ${!isExtension && "hidden"}`}>
          {softSkillsData().map((data, id) => (
            <Input key={id} {...data} />
          ))}
        </div>
      </div>

      <div className="grid py-4 ">
        <label>Technical Overall</label>
        <textarea
          className="px-2 py-1 border border-gray-300 border-solid rounded-lg shadow-sm focus:outline-none "
          name=""
          id=""
          cols="30"
          rows="10"
          value={generalText}
          onChange={(e) => setGeneralText(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Form;
