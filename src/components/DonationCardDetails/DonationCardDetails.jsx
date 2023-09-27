import { useLoaderData, useParams } from "react-router-dom";
import { BiDollar } from "react-icons/bi";
import { getStoredDonation, saveDonation } from "../../utility/localstorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationCardDetails = () => {

    const donationDetails = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const donation = donationDetails.find(donation => donation.id === idInt);
    // console.log(donation);

    const handleDonate = () => {

        const donations = getStoredDonation();
        console.log(donations);
        const match = donations.find(donateId => donateId === idInt);
        console.log(match);
        if (match) {
            toast("You already donated for this field!");
        }
        else {
            saveDonation(idInt);
            toast("You have donated successfully");
        }
    }

    return (
        <div className="max-w-7xl mx-auto mt-20">
            <div className="relative mb-4 mx-5">
                <img className="w-full" src={donation.image} alt="" />
                <h2 className="text-4xl font-semibold mt-6 md:mt-14 mb-6">{donation.title}</h2>
                <p>{donation.description}</p>

                <div className="absolute bottom-28 md:bottom-36 bg-opacity-60 bg-black w-full">
                    <button
                    onClick={handleDonate}
                        className="flex items-center px-5 py-2 font-semibold rounded text-white m-5 md:m-10"
                        style={{ backgroundColor: donation.text_color }}>Donate <span className="flex items-center">
                            <BiDollar></BiDollar> {donation.price}</span>
                    </button>
                </div>
            </div>
            <ToastContainer />


        </div>
    );
};

export default DonationCardDetails;