import React from 'react'
import { Avatar, Appheader, Button, Brandvisual } from '@momentum-design/components/react'
import './header.css';

const Header: React.FC = () => {
  return (
    <>
      <Appheader>
        <div slot="leading" className="leadingSlot">
          <Button variant="tertiary" size={32} prefixIcon="application-panel-bold" type="button" role="button" aria-label="icon button"></Button>
          <Brandvisual name="momentum-design-logo-dark-color-horizontal"></Brandvisual>
        </div>
        <div slot="center">Center Search Icon placeholder</div>
        <div slot="trailing">
          <Avatar size={32} src="https://picsum.photos/id/8/5000/3333"></Avatar>
          <Button variant="tertiary" size={32} prefixIcon="waffle-menu-bold" type="button" role="button" aria-label="icon button"></Button>
        </div>
      </Appheader>
    </>
  );
};

export default Header;