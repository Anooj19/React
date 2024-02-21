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
                <div className="search">
                    <div className="text">
                        <p><i class="fa-solid fa-magnifying-glass"></i></p>
                    </div>
                    <div className="text1">
                        <input placeholder="Search for Products, Brand & More..."/>
                    </div>
                </div>

                <div className="icons">
                    <div className="profile">
                        <i class="fa-solid fa-user"></i>
                        <h6>Profile</h6>
                    </div>
                    <div className="wishlist">
                        <i class="fa-solid fa-heart"></i>
                        <h6>WishList</h6>
                    </div>
                    <div className="bag">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <h6>Bag</h6>
                    </div>

                </div>
                
            </div>

        </>
    )
}

export default Myntra;
