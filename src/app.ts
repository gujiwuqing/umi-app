// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate

export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const reactQuery: {
  devtool: { initialIsOpen: boolean };
  queryClient: {
    defaultOptions: { queries: { refetchOnWindowFocus: boolean } };
  };
} = {
  devtool: {
    initialIsOpen: true,
  },
  queryClient: {
    defaultOptions: {
      queries: {
        // 🟡 此配置具有的表现往往令人出乎意料，若无特殊需求，请默认关闭
        refetchOnWindowFocus: false,
      },
    },
  },
};

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};
