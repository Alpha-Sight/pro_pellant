import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

interface UploadCvPlusProps {
  /**
   * The text shown below the file input describing supported file types.
   * Accepts `\n` to create line breaks, e.g. "Line1\nLine2".
   */
  supportedFileText?: string;
  /**
   * The Tailwind width classes for the plus icon. e.g. "w-[6.85094rem]"
   */
  iconWidth?: string;
  /**
   * The Tailwind height classes for the plus icon. e.g. "h-[6.85094rem]"
   */
  iconHeight?: string;
}

const UploadCvPlus: React.FC<UploadCvPlusProps> = ({
  supportedFileText = "Supported file types: .PDF, .DOCX, .TXT.",
  iconWidth = "w-[6.85094rem]",
  iconHeight = "h-[6.85094rem]",
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsLoading(true);
      const file = e.target.files[0];
      setSelectedFile(file);

      // Simulate an upload completing after 1 second
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  // Split the "supportedFileText" by new lines
  const lines = supportedFileText.split("\n");

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <label
        htmlFor="cvInput"
        className="h-[9.375rem] w-[9.375rem] flex items-center justify-center py-3 px-[1.26rem] gap-[0.36056rem] border-[5.769px] border-[#5D6078] rounded-full hover:border-black text-[#5D6078] hover:text-black hover:transition-all hover:duration-300 ease-in-out cursor-pointer"
      >
        {isLoading ? (
          <p className="font-medium">Uploading CV...</p>
        ) : (
          <FaPlus className={`${iconWidth} ${iconHeight}`} />
        )}
      </label>

      <input
        id="cvInput"
        type="file"
        className="hidden"
        accept=".pdf,.doc,.docx,.txt"
        onChange={handleFileChange}
      />

      {/* Show multiple lines if they exist, each separated by <br/> */}
      <p className="text-[#82859D] text-center text-sm font-normal leading-normal">
        {lines.map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {/* If not the last line, add <br/> */}
            {i < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>

      {selectedFile && !isLoading && (
        <p className="text-black text-center text-base font-normal leading-normal">
          {selectedFile.name}
        </p>
      )}
    </div>
  );
};

export default UploadCvPlus;
