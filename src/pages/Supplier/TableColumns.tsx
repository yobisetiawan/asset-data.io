import { Button, Modal, Space } from "antd";
import { ColumnsType } from "antd/lib/table";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  EyeOutlined,
} from "@ant-design/icons";

const { confirm } = Modal;

export const columns = (
  params: any,
  onSort: (c: any) => {},
  onEdit: (id: string) => void,
  onDelete: (id: string) => void
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
      render: (text, record) => {
        return (
          <Button
            type="primary"
            onClick={() => {
              console.log(text, record);
            }}
            size="small"
            icon={<EyeOutlined />}
          />
        );
      },
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
      render: (text, record) => (
        <Space>
          <Button
            type="ghost"
            size="small"
            icon={<EditOutlined />}
            onClick={() => {
              onEdit(record.key);
            }}
          />
          <Button
            type="primary"
            danger
            size="small"
            onClick={() => {
              confirm({
                icon: <ExclamationCircleOutlined />,
                content: (
                  <p>Are you sure you want to delete this "{record.name}"</p>
                ),
                okText: "Delete",
                cancelText: "Cancel",
                onOk() {
                  onDelete(record.key);
                },
              });
            }}
            icon={<DeleteOutlined />}
          />
        </Space>
      ),
    },
  ];
};
