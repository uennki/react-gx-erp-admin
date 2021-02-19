interface RouterType {
  path: string;
  component: React.FunctionComponent | React.Component;
  root?: string[];
  notExect?: boolean;
}

const Routers: RouterType[] = [];

export default Routers;
