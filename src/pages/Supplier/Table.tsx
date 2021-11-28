import React, { useCallback, useEffect, useState } from "react";
import qs from "qs";
import { Table, Pagination, Input } from "antd";
import { Box } from "../../components";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";

import { setSupplier } from "../../redux/features/supplier";
import { UseFetch } from "../../utils/hooks";
import { API } from "../../config";

import { columns } from "./TableColumns";

const Component = () => {
  const [params, setparams] = useState({
    keyword: "",
    orderCol: "name",
    orderDir: "asc",
    limit: 15,
    page: 1,
  }) as any;

  const { list, pagination } = useSelector(
    (state: RootState) => state.supplier
  );

  const dispatch = useDispatch();

  const { loading, data } = UseFetch({
    API: useCallback(() => {
      return API.supplier(qs.stringify(params));
    }, [params]),
    manual: false,
  });

  const dataSource = useCallback(() => {
    if (list) {
      return list.map((el: any) => {
        return {
          key: el.guid,
          name: el.name,
          contact_person: el.contact_person,
          contact_number: el.contact_number,
        };
      });
    }
    return [];
  }, [list]) as any;

  const paginationChage = useCallback(
    (page, pageSize) => {
      setparams({ ...params, page: page });
    },
    [params]
  );

  const onSort = useCallback(
    (c: any) => {
      let orderDir = "asc";

      if (params.orderCol === c.dataIndex) {
        orderDir = params.orderDir === "asc" ? "desc" : "asc";
      }

      return {
        onClick: () => {
          setparams({
            ...params,
            orderCol: c.dataIndex,
            orderDir: orderDir,
          });
        },
      };
    },
    [params]
  );

  const getColumns = useCallback(
    () => columns(params, onSort),
    [params, onSort]
  );

  useEffect(() => {
    dispatch(
      setSupplier({
        list: data?.data,
        pagination: data?.meta,
      })
    );
  }, [data, dispatch]);

  const onSearch = (value: string) =>
    setparams({
      ...params,
      page: 1,
      keyword: value,
    });

  return (
    <div>
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
        onChange={paginationChage}
      ></Pagination>
    </div>
  );
};

export default Component;
