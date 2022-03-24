import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { FC, Fragment } from "react";

interface LayoutProps {
    children: any;
  }

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <Fragment>
            <Header/>
                <main>
                    {children}
                </main>
            <Footer/>
        </Fragment>
    );
}

export default Layout;