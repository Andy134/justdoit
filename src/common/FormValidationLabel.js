import { Typography } from "@material-ui/core";

export default function FormValidationLabel({message, show}) {
    return show && <Typography variant="caption" color={"error"}>{message}</Typography>
}