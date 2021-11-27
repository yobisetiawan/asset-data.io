import React from "react";
export const columns = [
  {
    title: "View",
    dataIndex: "guid",
    key: "View",
    width: 100,
    render: () => (
      <div>
        <a href="#d">Show</a>
      </div>
    ),
  },
  {
    title: "Supplier Name",
    dataIndex: "name",
    key: "Supplier Name",
    sorter: true,
  },
  {
    title: "Contact Person",
    dataIndex: "contact_person",
    key: "Contact Person",
    sorter: true,
  },
  {
    title: "Contact Number",
    dataIndex: "contact_number",
    key: "Contact Number",
    sorter: true,
  },
  {
    title: "Actions",
    dataIndex: "guid",
    key: "Actions",
    width: 100,
    render: () => (
      <div>
        <a href="#e">Edit</a> <a href="#d">Delete</a>
      </div>
    ),
  },
];
