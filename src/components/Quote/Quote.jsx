import {useState} from "react";
import MessageModal from "../Modal/MessageModal";

const Quote = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
        <div>
            <h1>HTI BIOCHEM FC-200 ANALYZER QUOTE REQUEST</h1>

            <p>My Message</p>

            <p>Rate this product</p>

            <div>
                <button>Seen</button>
                <button>Responded</button>
                <button>Chat</button>
                <button>Download Quote</button>
                <button onClick={() => setOpen(!open)}>View Message</button>
            </div>
        </div>

            <MessageModal open={open} setOpen={setOpen} />
        </>        
    )
}

export default Quote
