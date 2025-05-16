import { Button, ButtonProps } from "../ui/button";

export const Submit = ({ children, ...others }: ButtonProps) => {
  return (
    <Button type="submit" {...others}>
      {children}
    </Button>
  );
};
