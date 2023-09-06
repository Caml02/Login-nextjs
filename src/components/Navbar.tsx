import {getServerSession} from 'next-auth';

async function Navbar() {
    
    const session = await getServerSession()
    console.log(session);
    
    return (
      <nav className="bg-zinc-900 p-4">
        <div className="flex justify-between container mx-auto">
          <a href="/">
            <h1 className="font-bold text-xl">NextAuth</h1>
          </a>
  
          <ul className="flex gap-x-2">
            {session ? (
                <li className="px-3 py-1">
                    <a href="/dashboard/profile">Dashboard</a>
                </li>
            ) : (
                <>
                <li className="px-3 py-1">
                    <a href="/about">About</a>
                </li>
                <li className="px-3 py-1">
                    <a href="/login">Login</a>
                </li>
                <li className="px-3 py-1">
                    <a href="/register">Register</a>
                </li>
                </>
            )       
        }
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  