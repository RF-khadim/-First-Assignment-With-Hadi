const Error = ({ message }) => {
    return (
        <p className="pl-2 text-left w-full mt-2 text-[13px]  text-red-400">
            {
                message
            }
        </p>
    )
}

export default Error