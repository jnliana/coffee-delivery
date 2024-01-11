interface InputProps {
  label: string;
  name?: string;
  isRequired?: boolean;
}

const BASE_INPUT = `peer p-3 flex flex-row items-center w-full bg-grey-100 border border-grey-200 rounded-sm text-sm placeholder-black-50 text-black-100`;
const HANDLING_STATE_CLASSES = `focus:outline-none focus:border-yellow-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none`;
export const Input = ({ label = '', isRequired = false, name }: InputProps) => {
  return (
    <div className="relative">
      <input
        type="text"
        name={name}
        className={`${BASE_INPUT} ${HANDLING_STATE_CLASSES}`}
        placeholder={label}
        required={isRequired}
      />
      {!isRequired && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-black-50 text-sm opacity-0 peer-placeholder-shown:opacity-100 ">
          Optional
        </span>
      )}
    </div>
  );
};
