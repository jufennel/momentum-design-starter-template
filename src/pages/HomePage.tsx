import React from 'react';

import { Avatar, Input } from '@momentum-design/components/react';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Welcome Test</h1>

            <div className="">
                <Avatar src="https://picsum.photos/id/63/256" />
                <Input className="input-test" label="Label" help-text-type="default" help-text="Helper text" validation-message=""
                    placeholder="Placeholder" toggletip-placement="" toggletip-text="" info-icon-aria-label=""
                    name="input" prefix-text="" data-aria-label="" leading-icon="" clear-aria-label="clear input"></Input>
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros felis, ultrices eu malesuada vel, gravida vitae libero. Sed a odio nec eros lacinia bibendum quis eu turpis. Quisque consequat convallis nibh at accumsan. Nunc vehicula, ligula a efficitur luctus, enim dolor molestie nulla, egestas pretium lacus enim auctor lectus. Donec eget erat massa. Duis dui nunc, imperdiet a ex non, molestie gravida mauris. Mauris non nulla purus. Sed eu faucibus eros. Vestibulum bibendum augue non neque consectetur semper. Donec faucibus feugiat metus sed euismod. Aenean mauris tortor, mattis nec turpis a, scelerisque iaculis nulla. Fusce a neque nisi. Nulla in neque metus. Nam vitae sollicitudin tellus. Suspendisse potenti. Nulla at leo ipsum.

                Nulla in sem sodales, pretium ipsum vitae, molestie turpis. Maecenas erat lectus, facilisis vel ipsum in, tincidunt consequat magna. Nam ornare facilisis dui, sed fermentum lacus egestas vel. Donec auctor nisi dui, vitae sagittis ipsum fermentum et. Proin massa urna, accumsan a libero eu, dictum lobortis nulla. Duis semper nisl diam. Nulla viverra tempus ex. Phasellus eget risus diam. Nunc metus elit, mattis sit amet quam id, accumsan pretium mauris. Suspendisse viverra rutrum iaculis. Sed aliquet erat nibh, quis commodo orci porta quis.

                Proin sodales arcu ante, rhoncus mattis magna viverra ut. Vivamus vel lacus vitae metus dictum iaculis ac sed lorem. Sed blandit, erat sit amet pulvinar semper, orci enim placerat enim, at varius elit lacus sit amet diam. Donec ullamcorper maximus lacus vitae consectetur. Suspendisse molestie, tortor fermentum hendrerit tempus, turpis purus volutpat ante, sed efficitur nisl nisl at ipsum. Fusce eget lectus lorem. Morbi vitae nisi in magna feugiat sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla quam nulla, ultrices nec magna nec, egestas volutpat diam. Etiam consequat ipsum et lorem tincidunt, vitae bibendum enim eleifend. Mauris quis est eu mi posuere tristique. Nunc lorem arcu, tempor et mollis nec, tincidunt id nibh.

                Pellentesque eget mattis felis. Nullam nibh mi, facilisis nec diam tempus, scelerisque condimentum arcu. In consequat dolor nulla, vel dapibus enim congue et. Etiam pharetra, odio eu luctus porta, nisi massa sagittis ligula, eget aliquet leo ligula id metus. Pellentesque nec faucibus ligula, quis scelerisque dui. Quisque sodales elit ac sem tincidunt porttitor. Sed sit amet nibh placerat, hendrerit tortor at, viverra lectus. Curabitur lacus nibh, interdum sit amet augue a, iaculis sodales tellus. Mauris id auctor elit, eget fringilla risus. Curabitur quis maximus purus. Nunc molestie ante quis neque interdum ultricies. Nulla aliquet arcu at enim fermentum posuere sed ut purus. Donec imperdiet et nisi ut tempus. Quisque vitae tortor in mauris luctus facilisis.

                Praesent aliquam iaculis lectus non vulputate.
            </div>
        </div>
    );
};

export default HomePage;