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
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h4 className="font-bold text-lg">Order Details</h4>
            <p>Customer: {customer_email}</p>
            <div>
                <p>Order Date           :  {order_date}</p>
                <p>Wrapping Charges     : ${wrapping_charges.toFixed(2)}</p>
                <p>Decoration Charges   : ${decoration_charges.toFixed(2)}</p>
                <p>Sub Total            : ${sub_total.toFixed(2)}</p>
            </div>
            <div>
                <p>Discount             : {discount}</p>
                <p>Total Amount         : ${total_amount.toFixed(2)}</p>
                <p>Paid Amount          : ${paid_amount.toFixed(2)}</p>
                <p>Balance              : ${balance.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default OrderDetailsInfoCardComponent;