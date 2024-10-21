import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex gap-4x bg-pink-400 text-1xl text-white justify-center space-x-9 ">
      
        <Link className='m-3' href="/">Home</Link>
        
        
        <Link className='m-3'href="About">About </Link>
    
        
        <Link className='m-3'href="/Contact">Contact</Link>
        
      
    
    </div>
  );
}


export default Header