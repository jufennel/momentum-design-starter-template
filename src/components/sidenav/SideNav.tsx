import React from 'react'
import { SideNavigation, MenuSection, MenuItem } from '@momentum-design/components/react'
import styles from './SideNav.module.css'

const SideNav: React.FC = () => {
    return (
        <>
            <SideNavigation variant="flexible" footer-text="Customer Name" grabber-btn-aria-label="Toggle Side navigation" parent-nav-tooltip-text="Contains active navmenuitem">
                <MenuSection slot="scrollable-menubar" show-divider="">
                    <MenuItem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="1" label="Messaging"></MenuItem>
                    <MenuItem icon-name="meetings-bold" nav-id="2" label="Meetings" disabled=""></MenuItem>
                    <MenuItem badge-type="dot" icon-name="audio-call-bold" nav-id="3" label="Calling"></MenuItem>
                </MenuSection>
            </SideNavigation>
        </>
    );
};

export default SideNav;