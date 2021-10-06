import react from "react";
import "./styles.css"
const Loading = () => {
    return (
        <>
            <section class="hero is-info">
                <div class="hero-body">
                    <div class="lds-ripple"><div></div><div></div></div>
                </div>
            </section>

        </>
    );
};

export default Loading;