import { Card } from "../../components";

export const CardItems = (
  data: any,
  childAnims: any,
  cardAnim: any,
  variant = "primary",
  size = "full",
  imageSizes = "90vw",
) => {
  return data.map((val: any, i: number) => {
    return (
      <Card
        key={`cardItem${i}`}
        data={val.props}
        size={size}
        imageSizes={imageSizes}
        variant={variant}
        childAnims={childAnims}
        priority
        {...cardAnim}
      />
    );
  });
};
