import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

import { Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOrders, updateOrder } from '../features/auth/authSlice';
import { useState } from 'react';

const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },

  {
    title: 'Action',
    dataIndex: 'action',
  },
];

const Orders = () => {
  const dispatch = useDispatch();

  const currentDate = new Date();
  const [startDate, setStartDate] = useState(
    currentDate.setMonth(currentDate.getMonth() - 1)
  );
  const [endDate, setEndDate] = useState(currentDate);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const orderState = useSelector((state) => state.auth.orders.alluserorders);

  const updateOrderStatus = (a, b) => {
    dispatch(updateOrder({ id: a, status: b }));
  };

  const data1 = [];
  for (let i = 0; i < orderState?.length; i++) {
    data1.push({
      key: i + 1,
      name: orderState[i]?.user?.firstname,
      product: (
        <Link to={`/admin/order/${orderState[i]?._id}`}>View Order </Link>
      ),
      amount: orderState[i]?.totalPrice,
      date: new Date(orderState[i].createdAt).toLocaleString(),
      action: (
        <>
          <select
            name=""
            id=""
            defaultValue={orderState[i]?.orderStatus}
            onChange={(e) =>
              updateOrderStatus(orderState[i]?._id, e.target.value)
            }
            className=" form-control form-select"
          >
            <option value="Proceed">Proceed</option>
            <option value="Shipped">Shipped</option>
            <option value="On the way">On the way</option>
            <option value="Delivered">Delivered</option>
            <option value="Canceled">Canceled</option>
          </select>
        </>
      ),
    });
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="mb-4 title" style={{ width: '100%' }}>
          Orders
        </h3>
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
        />
      </div>
      <div>{<Table columns={columns} dataSource={data1} />}</div>
    </div>
  );
};

export default Orders;
