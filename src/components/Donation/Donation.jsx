import { BiDollar } from "react-icons/bi";

const Donation = ({donate}) => {
    const {image, title, category, price, category_bg, card_bg, text_color} = donate;
    return (
        <div >
            <div className="card lg:card-side shadow-xl mx-5" style={{backgroundColor: card_bg}}>
                <img className=" lg:rounded-l-2xl" src={image} alt="" />
                <div className="p-6">
                    <button className="text-left px-5 py-2 font-semibold rounded mb-3" style={{ backgroundColor: category_bg }}><span style={{ color: text_color }}>{category}</span></button>
                    <h2 className="card-title" style={{ color: text_color }}>{title}</h2>
                    <h4 className="flex items-center font-semibold mt-3" style={{color: text_color}}><BiDollar></BiDollar>{price}</h4>
                    <button className="items-center px-5 py-2 mt-4 font-semibold rounded text-white" style={{ backgroundColor: text_color }}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Donation;