import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils';

const state = true;

export default function Home() {
  return (
    <div>
      <p className='text-indigo-500 font-bold text-3xl'>Discord App</p>
      <Button>Click me</Button>
    </div>
  )
}
