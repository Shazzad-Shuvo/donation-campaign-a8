import DonationTypes from "../DonationTypes/DonationTypes";

const Home = () => {
    return (
        <div>
            <div className="hero bg- h-96 " style={{ backgroundImage: 'url(https://i.ibb.co/BNvhYHh/Rectangle-4281.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-4xl font-bold">I Grow By Helping People In Need</h1>
                        <div className="max-w-sm mx-auto">
                            <input className="rounded-l-lg p-3" type="text" placeholder="Search Here ..." />
                            <button className="rounded-r-lg py-3 px-5 font-semibold bg-[#FF444A]">Search</button>
                        </div>
                    </div>
                </div>
            </div>

            <DonationTypes></DonationTypes>

        </div>
    );
};

export default Home;