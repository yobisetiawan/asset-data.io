import React, { useCallback, useEffect, useState } from "react";
import qs from "qs";
import { Table, Pagination, Input, Modal, Row, Col, Button } from "antd";
import { Box } from "../../components";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";

import {
  setSupplier,
  setSupplierSelected,
} from "../../redux/features/supplier";
import { UseFetch } from "../../utils/hooks";
import { API } from "../../config";

import useTableHooks from "./TableHooks";
import Form from "./Form";

const Component = () => {
  const [params, setparams] = useState({
    keyword: "",
    orderCol: "name",
    orderDir: "asc",
    limit: 15,
    page: 1,
  });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const { list, pagination, row } = useSelector(
    (state: RootState) => state.supplier
  );

  const dispatch = useDispatch();

  const { loading, data, fetchData } = UseFetch({
    API: useCallback(() => {
      return API.supplier(qs.stringify(params));
    }, [params]),
    manual: false,
  });

  const onEdit = (id: string) => {
    const selected = list.find((i: any) => i.guid === id);
    dispatch(setSupplierSelected(selected));
    setIsModalVisible(true);
  };

  const { onSearch, getColumns, paginationChange, dataSource } = useTableHooks(
    params,
    setparams,
    list,
    fetchData,
    onEdit
  );

  useEffect(() => {
    dispatch(
      setSupplier({
        list: data?.data || [],
        pagination: data?.meta,
      })
    );
  }, [data, dispatch]);

  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <h1>Supplier</h1>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Button
            type="primary"
            onClick={() => {
              dispatch(setSupplierSelected({ now: new Date().getTime() }));
              setIsModalVisible(true);
            }}
          >
            Add New Supplier
          </Button>
        </Col>
      </Row>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Input.Search
          placeholder="Search"
          style={{ width: 200 }}
          allowClear
          onSearch={onSearch}
          loading={loading}
        />
      </div>
      <Box height={20} />
      <Table
        bordered
        dataSource={dataSource()}
        columns={getColumns()}
        pagination={false}
        scroll={{ y: 380 }}
        loading={loading}
      />
      <Box height={30} />
      <Pagination
        defaultCurrent={1}
        current={pagination?.current_page || 1}
        defaultPageSize={15}
        total={pagination?.total || 0}
        onChange={paginationChange}
      ></Pagination>

      <Modal
        title={row?.guid ? "Edit Supplier" : "Add New Supplier"}
        visible={isModalVisible}
        footer={false}
        onCancel={() => {
          setIsModalVisible(false);
        }}
      >
        <Form
          id={row?.guid || ""}
          row={row}
          onSuccess={() => {
            setIsModalVisible(false);
            fetchData();
          }}
          onExit={() => {
            setIsModalVisible(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default Component;
