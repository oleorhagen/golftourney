import * as React from "react";
import { Link as RouterLink } from "react-router-dom";

const Link = React.forwardRef(function Link(itemProps, ref) {
    return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});

export default Link;
