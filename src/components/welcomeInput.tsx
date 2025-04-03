interface WelcomeInputProps {
    label: string;
    id: string;
    value?: string;
    placeholder?: string;
    type?: string;
    labelStyle?: string;
    /** If true, render a <textarea> instead of <input> */
    isTextArea?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    disabled?: boolean;
}

const WelcomeInput: React.FC<WelcomeInputProps> = ({
                                                       label,
                                                       id,
                                                       value = "",
                                                       placeholder = "",
                                                       type = "text",
                                                       labelStyle = "px-[0.97rem] py-[0.7rem] bg-[#E8E8E8] h-[2.9rem] rounded-[0.48rem] w-[19rem] focus:outline-none focus:ring-2 focus:ring-[#3D3F4E] focus:ring-opacity-50",
                                                       isTextArea = false,
                                                       onChange,
                                                       required = true, // Default to true
                                                       disabled = false
                                                   }) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="text-[#030A00] text-lg font-bold leading-5">
                {label}
            </label>

            {isTextArea ? (
                // Render a <textarea>
                <textarea
                    id={id}
                    className={`${labelStyle} resize-none w-[19rem] h-44`}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    required={required} // Apply the required attribute
                    disabled={disabled}
                />
            ) : (
                // Default: <input>
                <input
                    id={id}
                    type={type}
                    className={`${labelStyle}`}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    required={required} // Apply the required attribute
                    disabled={disabled}
                />
            )}
        </div>
    );
};

export default WelcomeInput;
