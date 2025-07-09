import Link from "next/link";
import Image from "next/image";

export default function Social(){
return(
            <nav className="flex gap-4 mt-2 md:mt-0 flex-col md:flex-row justify-around items-center">                
                <Link href='https://www.linkedin.com/in/rogersoubr/'  > 
                    <Image  src="linkedin.svg" width={90} height={90} alt="logo" className="cow" />
                </Link>

                <Link href='https://github.com/rogersoubr' > 
                    <Image  src="github.svg" width={90} height={90} alt="logo" className="cow" />
                </Link>
            </nav>
    );
}