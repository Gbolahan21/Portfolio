import React from "react";

const Section1 = props => {
    const  {
        heading, subheading, CTA
    } = props;

    return (
        <section>
            <div>
                {heading && (
                    <div>
                        {heading}
                    </div>
                )}

                {subheading && (
                    <div>
                        {subheading}
                    </div>
                )}

                {CTA && (
                    <div>
                        {CTA}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Section1;