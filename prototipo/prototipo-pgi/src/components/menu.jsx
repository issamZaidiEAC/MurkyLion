xport default function Header() {

    return( 
        <>
            <section className="w-full h-screen flex flex-col items-center justify-between bg-yellow">
               
                <NavBar/>

                <h1 className="text-8xl text-black text-center">TURBIO LEON</h1>

                <div className='w-20 h-10 rounded-t-full bg-black flex justify-center items-center'>
                        <img src={arrow} className='w-7 invert rotate-90'/>
                </div>
                

            </section>
        </>
    )
}