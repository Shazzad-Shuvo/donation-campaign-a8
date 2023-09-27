import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";
// import DonationTypes from "../DonationTypes/DonationTypes";

const Home = () => {

    const [category, setCategory] = useState('');
    const [donations, setDonations] = useState([]);
    const [displayDonations, setDisplayDonations] = useState([]);


    


    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setDonations(data))
    }, []);

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setDisplayDonations(data))
    }, []);
    
    // console.log(donations);

    
    console.log(displayDonations);
    
    const handleNameChange  = (e) => {
        setCategory(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();

        if (category === ''){
            setDisplayDonations(donations);
        }
        else if (category.toLowerCase() === 'education'){
            const educationDonation = donations.filter(donate => donate.category.toLowerCase() === category.toLowerCase());
            setDisplayDonations(educationDonation);
        }
        else if (category.toLowerCase() === 'food'){
            const foodDonation = donations.filter(donate => donate.category.toLowerCase() === category.toLowerCase());
            setDisplayDonations(foodDonation);
        }
        else if (category.toLowerCase() === 'clothing'){
            const clothingDonation = donations.filter(donate => donate.category.toLowerCase() === category.toLowerCase());
            setDisplayDonations(clothingDonation);
        }
        else if (category.toLowerCase() === 'health'){
            const healthDonation = donations.filter(donate => donate.category.toLowerCase() === category.toLowerCase());
            setDisplayDonations(healthDonation);
        }
        else{
            setDisplayDonations([]);
        }
    };
    console.log(category);

    return (
        <div>
            <div className="hero h-96 " style={{ backgroundImage: 'url(https://i.ibb.co/BNvhYHh/Rectangle-4281.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-4xl font-bold">I Grow By Helping People In Need</h1>
                        <div className="max-w-sm mx-auto">
                            {/* <input className="rounded-l-lg p-3 text-black" type="text" name="name" placeholder="Search Here ..." />
                            <button onClick={handleSearch} className="rounded-r-lg py-3 px-5 font-semibold bg-[#FF444A]">Search</button> */}

                            <form onSubmit={handleSearch}>
                                <input
                                    className="rounded-l-lg p-3 text-black"
                                    type="text"
                                    name="name"
                                    onChange={handleNameChange}
                                    placeholder="Search Here ..." />
                                <input
                                    type="submit"
                                    value="Search"
                                    className="rounded-r-lg py-3 px-5 font-semibold bg-[#FF444A]" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* <DonationTypes category={category}></DonationTypes> */}
            < div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20 mr-6">
                    {
                        displayDonations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                    }
                </div>
            </div >

        </div>
    );
};

export default Home;