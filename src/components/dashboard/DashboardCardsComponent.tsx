import { useSelector } from "react-redux";
import {Flower} from "../../models/flower.ts";
import {Customer} from "../../models/customer.ts";

interface RootState {
    flower: Flower[]; // Adjust type based on your Flower model
    customer: Customer[]; // Adjust type based on your Customer model
}

const DashboardCardsComponent = () => {

    const flowers = useSelector((state: RootState) => state.flower); // Get flowers from Redux store
    const customers = useSelector((state: RootState) => state.customer); // Get customers from Redux store

    const cards = [
        {
            title: "Flowers",
            count: flowers.length,
            image: "/flower2.jpg", // Replace with the actual image path
        },
        {
            title: "Customers",
            count: customers.length,
            image: "/customer-card.jpg", // Replace with the actual image path
        },
        {
            title: "Orders",
            count: 45,
            image: "/order.jpg", // Replace with the actual image path
        },
    ];

    return (
        <div className="grid gap-6 mb-6 md:grid-cols-3">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="relative overflow-hidden rounded-lg shadow-lg border-2 border-[#bda6a6] bg-[#fff3f3] transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                >
                    {/* Background Image */}
                    <img
                        src={card.image}
                        alt={card.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* Overlay */}
                    <div className="relative z-10 p-5 bg-gradient-to-t from-[#432e32] to-transparent">
                        {/* Card Content */}
                        <h3 className="text-lg font-bold text-[#f0e5e5]">{card.title}</h3> {/* Lighter font color for title */}
                        <p className="text-3xl font-extrabold text-[#f0e5e5]">{card.count}</p> {/* Lighter font color for count */}
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 z-0 bg-[#432e32] opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
                </div>
            ))}
        </div>
    );
};

export default DashboardCardsComponent;
