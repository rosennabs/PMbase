import { useField } from "formik";
import React from "react";

function FormField({
  label,
  as,
  options,
  ...props
}: {
  label: string;
  as: string;
  options: string[];
  [key: string]: any; //for additional attributes passed through props
}) {
  const [field, meta] = useField(props);

  const renderField = () => {
    switch (as) {
      case "select":
        return (
          <select
            {...field}
            {...props}
            className={`border-solid border w-full rounded-lg p-2 h-12 ${meta.touched && meta.error ? "border-red-600" : "border-teal-500"
              }`}
          >
            <option value=""></option>

            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      
      case "textarea":
        return (
          <textarea
            {...field}
            {...props}
            className={`border-solid border w-full rounded-lg p-4 ${meta.touched && meta.error
              ? "border-red-600"
              : "border-teal-500"
              }`}
          />
        );
      
      case "checkbox":
        return (
          <div className="flex flex-col">
            {options &&
              options.map((option) => (
                
                <label key={option} className="flex items-center w-max">
                  <input
                    type="checkbox"
                    {...field}
                    value={option}
                    checked={field.value.includes(option)}
                    className={`border-solid border rounded-lg p-2 h-6 w-6 ${meta.touched && meta.error ? "border-red-600" : "border-teal-500"
                      }`}
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
        );
      default:
        return (
          <input
            {...field}
            {...props}
            className={`border-solid border w-full rounded-lg p-2 h-12 text-base ${meta.touched && meta.error
              ? "border-red-600"
              : "border-teal-500"
              }`}
          />
        );
    }
  };


  return (
    <div className="flex flex-col py-4 px-2 w-full text-xl">
     
      <label className="pb-4">
        {label}
      </label>
      {renderField()}
      {meta.touched && meta.error && (
        <div className="text-red-600">{meta.error}</div>
      )}
      </div>

      
  );
}

export default FormField;
