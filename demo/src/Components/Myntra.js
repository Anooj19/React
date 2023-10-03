import './Myntra.css'
const Myntra = () => {
    return (
        <>
            <div className="nav">
                <div className='logo' >
                    <img style={{width: "100%", height: "100%"}} src='https://images.indianexpress.com/2021/01/myntra.png' />
                </div>
                <div className='menu'>
                    <h3>Men</h3>
                    <h3>Ladies</h3>
                    <h3>Kids</h3>
                    <h3>Home&Livings</h3>
                    <h3>Beauty</h3>
                    <h3>Studio</h3>
                </div>
                <div className='search'>
                    <div className='text'>
                        <p><i class="fa-solid fa-magnifying-glass"></i></p>
                        <p><input type='text' placeholder='Search for Products,Brands & more' /></p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Myntra;
