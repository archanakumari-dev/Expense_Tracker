import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import AddExpense from "../components/AddExpense";
import { Table } from "antd";
import axios from "axios";
import toast from "react-hot-toast";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [allTransaction, setAllTransaction] = useState();

  const getAllTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const res = await axios.post("/transaction/get-transaction", {
        userid: user._id,
      });
      setAllTransaction(res.data.transaction);
      console.log("fetched successfully", res.data.transaction);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => getAllTransactions, []);
  const deleteTransaction = async (id) => {
    try {
      await axios.post("/transaction/delete-transaction", { id });
      toast.success("transaction deleted successfully");
      await getAllTransactions();
    } catch (error) {
      console.log(error.message);
      toast.error("Cannot delete transaction");
    }
  };
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Actions",
      render: (text, record) => (
        <button
          onClick={() => deleteTransaction(record._id)}
          className="bg-red-400 text-white px-2 py-1 rounded hover:bg-red-500"
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <Layout>
      <div
        className={`main-content ${
          showModal ? "blur-lg pointer-events-none" : ""
        }`}
      >
        <div className="flex justify-end items-center mx-3 my-5 shadow py-1.5 px-3 ">
          <button
            className="bg-blue-300 rounded p-3 border-blue-600 cursor-pointer outline-none text-medium font-medium text-blue-900 mt-2"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Add new transaction
          </button>
        </div>
        <Table
          columns={columns}
          dataSource={allTransaction?.map((item) => ({
            ...item,
            key: item._id,
          }))}
        />
      </div>
      <div>
        {showModal && (
          <AddExpense
            closeModal={() => setShowModal(false)}
            refreshData={getAllTransactions}
          />
        )}
      </div>
    </Layout>
  );
};

export default Home;
