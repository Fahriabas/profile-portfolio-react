const Header = () => {
    return (
        <header className="w-full h-[80px] leading-[80px] flex items-center">
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* logo */}
                    <div className="flex items-center gap-[10px]">
                        <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500]
                        rounded-full flex items-center justify-center
                        ">
                            F
                        </span>

                        <div className="leading-[20px]">
                            <h2 className="text-xl text-smallTextColor font-[700]">Fahri</h2>
                            <p className="text-smallTextColor text-[14px] font-[500]" >
                                personal
                            </p>
                        </div>
                    </div>
                    {/* logo end */}
                    {/* menu start */}
                    <div className="menu">
                        <ul className="flex items-center gap-10">
                            <li><a className="text-smallTextColor font-[600] " href="#">About</a></li>
                            <li><a className="text-smallTextColor font-[600] " href="#">Services</a></li>
                            <li><a className="text-smallTextColor font-[600] " href="#">Portfolio</a></li>
                            <li><a className="text-smallTextColor font-[600] " href="#">Contact</a></li>
                        </ul>
                    </div>
                    {/* menu end */}

                    {/* menu right */}

                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor ">

                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header