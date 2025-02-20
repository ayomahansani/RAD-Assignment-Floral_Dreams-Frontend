import OrderDetailsTableComponent from "../components/orderDetails/OrderDetailsTableComponent.tsx";
import OrderDetailsInfoCardComponent from "../components/orderDetails/OrderDetailsInfoCardComponent.tsx";
import {Order} from "../models/order.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store/Store.ts";
import {useEffect, useState} from "react";
import {viewOrders} from "../reducers/OrderSlice.ts";

interface RootState {
    order: Order[];
}

const OrderDetailsPage = () => {

    const orders = useSelector((state: RootState) => state.order );
    const dispatch = useDispatch<AppDispatch>();

    const [selectedOrderId, setSelectedOrderId] = useState<number | undefined>();

    useEffect(() => {
        dispatch(viewOrders())
    }, [dispatch]);

    function searchOrderById(orderId: number) {
        return orders.find((order) => order.order_id == orderId) || null;
    }

    const selectedOrder = selectedOrderId ? searchOrderById(selectedOrderId) : new Order(0, '', '-', [], 0, 0, 0, 0, 0, 0, 0);

    return (
        <div className="relative p-3">

            <div className="p-2 border-2 border-[#432e32] rounded-lg shadow-md bg-[#bda6a6] mb-2">
                <div className="max-w-md">
                    <label className="block text-md font-bold text-black mb-1">Select Order</label>
                    <select
                        value={selectedOrderId}
                        onChange={(e) => {
                            setSelectedOrderId(Number(e.target.value));
                        }}
                        className="w-full p-1 border border-[#432e32] text-md rounded-lg focus:outline-none shadow-md shadow-[#7e6868] mb-1"
                    >
                        <option value="">Select an order</option>
                        {orders.map((order) => (
                            <option key={order.order_id} value={order.order_id}>
                                {order.order_id} - {order.customer_email} - ({order.order_date})
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {selectedOrder && (
                <>
                    <OrderDetailsInfoCardComponent
                        customer_email={selectedOrder.customer_email}
                        order_date={selectedOrder.order_date}
                        wrapping_charges={selectedOrder.wrapping_charges}
                        decoration_charges={selectedOrder.decoration_charges}
                        sub_total={selectedOrder.sub_total}
                        discount={selectedOrder.discount}
                        total_amount={selectedOrder.total_amount}
                        paid_amount={selectedOrder.paid_amount}
                        balance={selectedOrder.balance}
                    />
                    <OrderDetailsTableComponent order_items={selectedOrder.order_items}/>
                </>
            )}
        </div>
    );
};

export default OrderDetailsPage;