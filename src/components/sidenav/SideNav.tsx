import React from 'react'
import { SideNavigation, MenuSection, NavMenuItem } from '@momentum-design/components/react'

const SideNav: React.FC = () => {
    return (
        <>
            <SideNavigation variant="flexible" footerText="Customer Name" grabberBtnAriaLabel="Toggle Side navigation" parentNavTooltipText="Contains active navmenuitem">
                <MenuSection slot="scrollable-menubar" showDivider>
                    <NavMenuItem badgeType="counter" counter={2} maxCounter={66} iconName="chat-bold" navId="1" label="Messaging"></NavMenuItem>
                    <NavMenuItem iconName="meetings-bold" navId="2" label="Meetings" disabled></NavMenuItem>
                    <NavMenuItem badgeType="dot" iconName="audio-call-bold" navId="3" label="Calling"></NavMenuItem>
                </MenuSection>
            </SideNavigation>
        </>
    );
};

export default SideNav;