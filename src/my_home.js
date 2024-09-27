import ooni from './ooni.png'
import alaafin from './alaafin.png'
import alake from './alake.png'

const Home = () => {
    return ( 
        <body>
            <section className="myHeader all_section bg-dark">
                <div className="leftHeader">
                    <ul>
                        <li className="btn text-white">Home</li>
                        <li className="btn text-white">About</li>
                        <li className="btn text-white">Blog</li>
                        <li className="btn text-white">Contact</li>
                    </ul>
                </div>
                <div className="rightHeader">
                    <ul>
                        <li className="btn text-white">Log in</li>
                        <li className="btn text-white">Sign Up</li>
                    </ul>
                </div>
            </section>
            <section className="myLogo all_section">
                <div className="logoText">ADESINA</div>
                <form action="#" className="input-group mb-3 searchForm">
                    <input type="search" placeholder="Search" name="search" className="mySearch form-control"></input>
                    <button type="submit" className="btn"><i className="fa fa-search"></i></button>
                </form> 
            </section>
            <section className="myCategory bg-dark all_section">
                <ul>
                    <li className="btn text-white">Culture</li>
                    <li className="btn text-white">Language</li>
                    <li className="btn text-white">Politics</li>
                    <li className="btn text-white">Education</li>
                </ul>
            </section>
            <section className="myUpperSection all_section">
                <div className='myArticle'>Africa is a beautiful continent with stunning landscapes, from golden deserts to lush forests. Its fertile soil supports many crops, helping communities thrive and feed their families. The rich culture of Africa shines through its music, dance, and colorful art, reflecting the lives and traditions of its people. African ancestors were incredibly creative, building great civilizations and inventing tools, textiles, and impressive structures. Their stories and achievements still inspire us today. Each country in Africa has its own unique customs and languages, making the continent a vibrant and diverse place full of life and history.</div>
            </section>
            <section className="myLowerSection all_section">
                <div class="card myCard">
                    <img src={ooni} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">His Imperial Majesty, Kabiyesi Adeyeye Enitan Ogunwusi Ojaja II CFR, the 51st Ooni of Ife.</p>
                    </div>
                </div>
                <div class="card myCard">
                    <img src={alaafin} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">His Imperial Majesty, Kabiyesi Lamidi Olayiwola Adeyemi III, the 45th Alaafin of Oyo</p>
                    </div>
                </div>
                <div class="card myCard">
                    <img src={alake} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">His Royal Majesty, Kabiyesi Adedotun Aremu Gbadebo III, the 14th Alake of Egba</p>
                    </div>
                </div>
            </section>
            <section className="myFooter bg-dark all_section">
                <hr/>
                <i class="fa-brands fa-whatsapp btn text-white footerLogo"></i>
                <i class="fa-brands fa-x-twitter btn text-white footerLogo"></i>
                <i class="fa-brands fa-instagram btn text-white footerLogo"></i>
                <hr/>
            </section>
        </body>
     );
}
 
export default Home;