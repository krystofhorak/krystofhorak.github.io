import PageNavigation from '../components/blocks/PageNavigation';
import PageFooter from '../components/blocks/PageFooter';

interface IProps {
  children: JSX.Element;
}

const DefaultLayout = ({ children }: IProps): JSX.Element =>
  (
    <>
      <PageNavigation />
      {children}
      <PageFooter />
    </>
  );

export default DefaultLayout;
