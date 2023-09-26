import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const DonationTypes = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setDonations(data))
    }, []);
    console.log(donations);
    return (

        < div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20 mx-5">
                {
                    donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            </div>
        </div >
    );
};

export default DonationTypes;