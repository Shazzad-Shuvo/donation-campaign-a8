import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
    const { id, image, title, category, category_bg, card_bg, text_color } = donation;
    return (
        <Link to={`/donate/${id}`}>
            <div className="card shadow-lg rounded-lg md:h-72" style={{ backgroundColor: card_bg }}>
                <figure></figure>
                <img src={image} alt="" />
                <div className="p-4">
                    <button className="text-left px-5 py-2 font-semibold rounded mb-3" style={{ backgroundColor: category_bg }}><span style={{ color: text_color }}>{category}</span></button>
                    <h2 className="card-title" style={{ color: text_color }}>{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default DonationCard;