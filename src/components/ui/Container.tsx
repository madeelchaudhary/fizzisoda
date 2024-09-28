import clsx from "clsx";

type ContainerProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Container = ({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: ContainerProps) => {
  return (
    <Comp
      className={clsx("px-4 first:pt-10 md:px-6", className)}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </Comp>
  );
};

export default Container;
