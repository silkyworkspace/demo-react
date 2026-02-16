import Section from '../Commons/Section/Section'
import SampleReactIcons from './SampleReactIcons/SampleReactIcons'
import SampleSimpleIcons from './SampleSimpleIcons/SampleSimpleIcons'
import SampleOfficialIcons from './SampleOfficialIcons/SampleOfficialIcons'
import SampleIconify from './SampleIconify/SampleIconify'

export default function Main() {
    return (
        <main>
            <Section text='React Icons'>
                <SampleReactIcons />
            </Section>

            <Section text='Simple Icons'>
                <SampleSimpleIcons />
            </Section>

            <Section text='Official Icons'>
                <SampleOfficialIcons />
            </Section>

            <Section text=' Iconify'>
                <SampleIconify />
            </Section>

        </main>
    )
}
