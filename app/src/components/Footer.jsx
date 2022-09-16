import react from "react";

function Footer() {
    var date = new Date().getFullYear()

    return (
        <footer>
            <p>
                Kashmiri Noodle {date}
            </p>
        </footer>
    );

}

export default Footer;