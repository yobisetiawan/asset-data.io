import { Button, Space } from "antd";
import { ColumnsType } from "antd/lib/table";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

export const columns = (
  params: any,
  onSort: (c: any) => {}
): ColumnsType<any> => {
  const getStatSort = (field: string) => {
    if (params.orderCol === field) {
      return params.orderDir === "asc" ? "ascend" : "descend";
    }
    return undefined;
  };

  return [
    {
      title: "View",
      dataIndex: "guid",
      key: "View",
      width: 90,
      render: () => (
        <Button type="primary" size="small" icon={<EyeOutlined />} />
      ),
    },
    {
      title: "Supplier Name",
      dataIndex: "name",
      key: "Supplier Name",
      sorter: true,
      showSorterTooltip: false,
      sortOrder: getStatSort("name"),
      onHeaderCell: (c: any) => onSort(c),
    },
    {
      title: "Contact Person",
      dataIndex: "contact_person",
      key: "Contact Person",
      sorter: true,
      showSorterTooltip: false,
      sortOrder: getStatSort("contact_person"),
      onHeaderCell: (c: any) => onSort(c),
    },
    {
      title: "Contact Number",
      dataIndex: "contact_number",
      key: "Contact Number",
      sorter: true,
      showSorterTooltip: false,
      sortOrder: getStatSort("contact_number"),
      onHeaderCell: (c: any) => onSort(c),
    },
    {
      title: "Actions",
      dataIndex: "guid",
      key: "Actions",
      width: 100,
      render: () => (
        <Space>
          <Button type="ghost" size="small" icon={<EditOutlined />} />
          <Button type="primary" danger size="small" icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];
};
