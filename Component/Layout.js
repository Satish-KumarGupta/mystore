import NavBar from "./NavBar"

const layout=({children})=>{
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}
export default layout