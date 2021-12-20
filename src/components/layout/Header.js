import React from 'react'

import {
  Header as HeaderSemantic
} from 'semantic-ui-react'

const Header = () => (
  <>
    <HeaderSemantic as='h1' icon textAlign='center'>
      Todo List
      <HeaderSemantic.Subheader>
        Manage your items
      </HeaderSemantic.Subheader>
    </HeaderSemantic>
  </>
);

export default Header;