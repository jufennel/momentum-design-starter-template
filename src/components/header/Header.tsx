import React from 'react'
import { Avatar, Appheader, Button, Brandvisual, Chip } from '@momentum-design/components/react'
import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <>
      <Appheader>
        <div slot="leading" className={styles.headerLeftContent}>
          <Button variant="tertiary" size="32" prefix-icon="application-panel-bold" type="button" role="button" tabindex="0" aria-label="icon button"></Button>
          <Brandvisual name="momentum-design-logo-dark-color-horizontal" className={styles.headerBrandvisual}></Brandvisual>
          <Chip color="cobalt" label="cobalt" icon-name=""></Chip>
        </div>
        <div slot="center">Center Search Icon placeholder</div>
        <div slot="trailing" className={styles.headerRightContent}>
          <Avatar size="32" name="avatar" src="https://picsum.photos/id/8/5000/3333"></Avatar>
          <Button variant="tertiary" size="32" prefix-icon="waffle-menu-bold" type="button" role="button" tabindex="0" aria-label="icon button"></Button>
        </div>
      </Appheader>
    </>
  );
};

export default Header;