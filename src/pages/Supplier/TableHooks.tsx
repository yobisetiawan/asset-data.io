import { useCallback, useRef } from "react";
import { API } from "../../config";
import { UseFetch } from "../../utils/hooks";

import { columns } from "./TableColumns";

interface Params {
  keyword: string;
  orderCol: string;
  orderDir: string;
  limit: number;
  page: number;
}

const Hook = (
  params: Params,
  setparams: React.Dispatch<any>,
  list: any[],
  supplierGet: () => Promise<void>,
  onEdit: (id: string) => void
) => {
  const selectedID = useRef("");

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

  const paginationChange = useCallback(
    (page, pageSize) => {
      setparams({ ...params, page: page });
    },
    [params, setparams]
  );

  const { fetchData: supplierDel } = UseFetch({
    API: useCallback(() => {
      return API.supplierDestroy(selectedID.current);
    }, []),
    manual: true,
  });

  const getColumns = useCallback(() => {
    const onSort = (c: any) => {
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
    };

    const onDelete = async (id: string) => {
      selectedID.current = id;
      await supplierDel();
      await supplierGet();
    };

    return columns(params, onSort, onEdit, onDelete);
  }, [params, setparams, supplierDel, supplierGet, onEdit]);

  const onSearch = (value: string) =>
    setparams({
      ...params,
      page: 1,
      keyword: value,
    });

  return {
    onSearch,
    getColumns,
    paginationChange,
    dataSource,
  };
};

export default Hook;
