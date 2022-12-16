import PageNavigation from '../components/blocks/PageNavigation';

interface IProps {
  children: JSX.Element;
}

const DefaultLayout = ({ children }: IProps): JSX.Element =>
  (
    <>
      <PageNavigation />
      {children}
    </>
  );

export default DefaultLayout;
