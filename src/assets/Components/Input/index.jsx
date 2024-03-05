import Error from "../Error/error"

const Input = ({ placeholder, type, onChange, error,value,name }) => {
    return (
        <>
            <input name={name} value={value} className={`w-full pl-2 text-white outline-none ${!error ? "border-white" : "border-red-500"} bg-transparent  border-b-2 py-1 mt-3 rounded-sm md:py-3`} type={type} onChange={onChange} placeholder={placeholder} />
            {
                error && <Error message={error} />
            }
        </>
    )
}

export default Input