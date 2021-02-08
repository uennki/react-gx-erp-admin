import Apple from '../views/Apple';
import Banana from '../views/Banana';

interface RouterType {
  path: string;
  component: React.FunctionComponent | React.Component;
  root?: string[],
  notExect?: boolean,
}

const AppleRouter: RouterType = {
  path: '/apple',
  component: Apple,
};

const BananaRouter: RouterType = {
  path: '/banana',
  component: Banana,
};

const Routers: RouterType[] = [AppleRouter, BananaRouter];

export default Routers;
