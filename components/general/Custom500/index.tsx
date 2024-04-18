import { Text } from "../../";

const Custom500 = ({ errorCode, errorMessage }: any) => (
  <Text text={`<b>${errorCode}</b> ${errorMessage}`} textStyle="h2" />
);

export default Custom500;
