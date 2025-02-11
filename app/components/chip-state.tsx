interface ChipStateProps {
    state: boolean;
}

export default function ChipState({ state } : ChipStateProps) {

    const baseStyle = "inline-flex items-center gap-2 rounded-full px-2 py-1 text-xs font-semibold";
    const pingStyle = "size-1.5 rounded-full animate-ping";

    return (
        <>
            {
                state 
                ? <span className={`${baseStyle} text-green-600 bg-green-50`}>
                    <span className={`${pingStyle} bg-green-600`}></span>
                    Active
                  </span>
                 
                : <span className={`${baseStyle} text-red-400 bg-red-50`}>
                    <span className={`${pingStyle} bg-red-400`}></span>
                    Inactive
                  </span>
            }
        </>


        
    )

}