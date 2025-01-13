import { Box } from './components/box/Box';

export default function Home() {
    return (
        <div className="centered">
            <Box
                title="Take action today – your future won't wait!"
                description="Our website is designed to help you break free from procrastination and take charge of your time and goals. With tools, tips, and strategies that encourage immediate action, we empower you to make meaningful progress starting now."
                link="/signin"
                linkTitle="Get started"
            />
        </div>
    );
}
