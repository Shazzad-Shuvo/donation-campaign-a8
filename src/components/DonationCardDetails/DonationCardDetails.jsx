import { useLoaderData, useParams } from "react-router-dom";
import { BiDollar } from "react-icons/bi";

const DonationCardDetails = () => {

    const donationDetails = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const donation = donationDetails.find(donation => donation.id === idInt);
    // console.log(donation);

    return (
        <div className="max-w-7xl mx-auto mt-20">
            <div className="relative mb-4">
                <img className="w-full" src={donation.image} alt="" />
                <h2 className="text-4xl font-semibold mt-14 mb-6">{donation.title}</h2>
                <p>{donation.description}</p>

                <div className="absolute bottom-36 bg-opacity-60 bg-black w-full">
                    <button className="flex items-center px-5 py-2 font-semibold rounded  text-white m-10" style={{ backgroundColor: donation.text_color }}>Donate <span className="flex items-center"><BiDollar></BiDollar> {donation.price}</span></button>
                </div>
            </div>


        </div>
    );
};

export default DonationCardDetails;