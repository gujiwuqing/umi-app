import { user } from '@/apis';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useMutation } from '@umijs/max';
import { Button } from 'antd';
import { useRef } from 'react';

type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: '用户名',
    dataIndex: 'username',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
  },

  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'created_at',
    valueType: 'date',
    hideInSearch: true,
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: () => [<a key="editable">编辑</a>],
  },
];

export default () => {
  const actionRef = useRef<ActionType>();

  const mutation = useMutation(user.queryPage, {
    onSuccess(data) {
      console.log('onSuccess', data);
      return {
        data: data.data.list,
        total: data.data.total,
        success: true,
      };
    },
    onError(error) {
      console.log('onError', error);
    },
  });
  return (
    <ProTable<GithubIssueItem>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      request={async (params) => {
        const { data } = await mutation.mutateAsync({
          ...params,
          current: undefined,
          pageNo: params.current,
        });
        console.log('data', data);
        return {
          data: data.list,
          total: data.total,
          success: true,
        };
      }}
      pagination={{
        pageSize: 5,
        onChange: (page) => {
          console.log('page', page);
        },
      }}
      dateFormatter="string"
      toolBarRender={() => [
        <Button
          key="button"
          icon={<PlusOutlined />}
          onClick={() => {
            // actionRef.current?.reload();
          }}
          type="primary"
        >
          新建
        </Button>,
      ]}
    />
  );
};
