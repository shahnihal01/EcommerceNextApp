import { getCategories } from "@/utils/getCategories";
import Image from "next/image";
import Link from "next/link";
import NavCartComponent from "../cart/NavCartComponent";

export default async function Navbar(){

    const categories: string[] = await getCategories();

    return( 
        <nav className="w-full sticky flex justify-center bg-white top-0">
            <div className="max-w-7xl w-full h-16 z-40 flex items-center justify-between px-7">
                <Link href={'/'}>
                    <Image
                        src={'/assets/Dil-Foods-new-logo.png'}
                        alt="logo"
                        className="w-16 h-16"
                        height={100}
                        width={100}
                    />
                </Link>
                <div className="flex justify-between gap-3 items-center">
                    {categories.map((cat, index)=>{
                        return(
                            <Link href={`/${cat}`} key={index}>
                                <p className="text-center text-black font-medium hover:text-red-500 hover:scale-105 transform duration-300">{cat.charAt(0).toUpperCase() + cat.slice(1)}</p>
                            </Link>
                        );
                    })}
                </div>
                <NavCartComponent/>
            </div>
        </nav>
    );
}