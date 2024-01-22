export default function NavBar() {

    return( 
        <>
            <nav className="w-full h-24 fixed bg-black hover:bg-yellow transition-all flex flex-column justify-center content-center">
                <div className="w-5/6 h-full flex flex-row justify-between items-center text-platinum hover:text-black ">
                    <div>
                        <h1>
                            TL
                        </h1>
                    </div>
                    <div className="text-center">
                        <p>LOGO</p>
                    </div>
                    <div>
                        <p>MENU BUTTON </p>
                    </div>
                </div>
            </nav>
        </>
    )
}