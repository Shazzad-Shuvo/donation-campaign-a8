import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localstorage";
import Donation from "../Donation/Donation";

const Donations = () => {

    const donations = useLoaderData();

    const [donationsMade, setDonationsMade] = useState([]);

    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        const storedDonationIds = getStoredDonation();
        if (donations.length > 0) {
            const donated = donations.filter(donate => storedDonationIds.includes(donate.id));

            setDonationsMade(donated);
        }
    }, [donations]);

    console.log(donationsMade);


    return (
        <div>
            <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-2 gap-5">
                {
                    donationsMade.slice(0, dataLength).map(donate => <Donation key={donate.id} donate={donate}></Donation>)
                }
            </div>
            <div className="text-center my-10">
                <div className={dataLength === donationsMade.length ? 'hidden' : ''}>
                    <button
                        onClick={ () => setDataLength(donationsMade.length)}
                        className="btn btn-primary">See All</button>
                </div>
            </div>
        </div>
    );
};

export default Donations;