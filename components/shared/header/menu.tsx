import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default function Menu() {
    return (
        <div className="flex justify-end">
            <nav className="flex gap-3 w-full">
                <Link href='/signin' className="flex items-center header-button">
                Hello, Sign In!
                </Link>

                <Link href='/cart' className="header-button">
                    <div className="flex-items-end">
                        <ShoppingCartIcon className="w-6 h-6"/>
                    Cart 
                    </div>
                </Link>
            </nav>
        </div>
    )
}