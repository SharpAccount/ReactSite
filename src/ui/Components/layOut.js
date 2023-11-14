import {Header} from "./header/header";

export default function LayOut({ children }) {
    return (
        <div className="vh-100 overflow-y-hidden">
            <Header/>
            {children}
        </div>
    )
}