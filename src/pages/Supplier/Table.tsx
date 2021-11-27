import React, { useCallback, useEffect } from "react";
import { Table, Pagination } from "antd";
import { Box } from "../../components";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";

import { setSupplier } from "../../redux/features/supplier";
import { UseFetch } from "../../utils/hooks";
import { API } from "../../config";

import { columns } from "./TableColumns";

const Component = () => {
  const { list, pagination } = useSelector(
    (state: RootState) => state.supplier
  );

  const dispatch = useDispatch();

  const { data } = UseFetch({
    API: useCallback(() => API.supplier(), []),
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

  useEffect(() => {
    dispatch(
      setSupplier({
        list: data?.data,
        pagination: data?.meta,
      })
    );
  }, [data, dispatch]);

  return (
    <div>
      <Table
        bordered
        dataSource={dataSource()}
        columns={columns}
        pagination={false}
        scroll={{ y: 380 }}
      />
      <Box height={30} />
      <Pagination
        defaultCurrent={1}
        current={pagination?.current_page || 1}
        defaultPageSize={15}
        total={pagination?.total || 0}
      ></Pagination>
    </div>
  );
};

export default Component;
