import dynamic from 'next/dynamic';

const ReactJson = dynamic(() => import('@microlink/react-json-view'), {
  ssr: false,
});

const JSON = ({ data, collapsed = 1 }: { data: any; collapsed: any }) =>
  data && <ReactJson src={data} collapsed={collapsed} theme="chalk" />;

export default JSON;
