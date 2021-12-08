
import { Segment } from 'semantic-ui-react';

const Layout = props => {

  return (
      <Segment padded style={{margin:'40px', minHeight:'600px'}}>
          {props.children}
      </Segment>
  );
}

export default Layout;
