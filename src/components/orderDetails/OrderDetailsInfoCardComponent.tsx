import React from 'react';

interface OrderInfoProps {
    customer_email: string;
    order_date: string;
    wrapping_charges: number;
    decoration_charges: number;
    sub_total: number;
    discount: number;
    total_amount: number;
    paid_amount: number;
    balance: number;
}

const OrderDetailsInfoCardComponent: React.FC<OrderInfoProps> = ({ customer_email, order_date, wrapping_charges, decoration_charges, sub_total, discount, total_amount, paid_amount, balance }) => {
    return (
        <div className="p-2 border-2 border-[#432e32] rounded-lg shadow-md bg-[#bda6a6] mb-4">
            <h4 className="font-bold text-lg mb-3">Order Details -:  {customer_email}</h4>
            <div className="mr-10 grid grid-cols-2 gap-20 font-semibold text-gray-700">
                <div>
                    <div className="flex justify-between mb-1">
                        <p className="flex-shrink-0">Order Date : </p>
                        <p>{order_date}</p>
                    </div>
                    <div className="flex justify-between mb-1">
                        <p className="flex-shrink-0">Wrapping Charges : </p>
                        <p>Rs : {wrapping_charges}</p>
                    </div>
                    <div className="flex justify-between mb-1">
                        <p className="flex-shrink-0">Decoration Charges : </p>
                        <p>Rs : {decoration_charges}</p>
                    </div>
                    <div className="flex justify-between mb-1">
                        <p className="flex-shrink-0">Sub Total : </p>
                        <p>Rs : {sub_total}</p>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <p className="flex-shrink-0">Discount : </p>
                        <p>Rs : {discount}</p>
                    </div>
                    <div className="flex justify-between mb-1">
                        <p className="flex-shrink-0">Total Amount : </p>
                        <p>Rs : {total_amount}</p>
                    </div>
                    <div className="flex justify-between mb-1">
                        <p className="flex-shrink-0">Paid Amount : </p>
                        <p>Rs : {paid_amount}</p>
                    </div>
                    <div className="flex justify-between mb-1">
                        <p className="flex-shrink-0">Balance : </p>
                        <p>Rs : {balance}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetailsInfoCardComponent;