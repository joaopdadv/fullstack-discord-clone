import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
    return (
        <div>
            <UserButton afterSignOutUrl="/"></UserButton>
            <ModeToggle></ModeToggle>
        </div>
    );
}
 
export default Home;