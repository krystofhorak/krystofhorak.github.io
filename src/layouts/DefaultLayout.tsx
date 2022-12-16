interface IProps {
  children: JSX.Element;
}

const DefaultLayout = ({ children }: IProps): JSX.Element =>
  (
    <>
      {children}
    </>
  );

export default DefaultLayout;
